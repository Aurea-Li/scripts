import urllib.request
from bs4 import BeautifulSoup
import json

url = "https://azure.microsoft.com/en-us/pricing/details/storage/blobs/"
soup = BeautifulSoup(urllib.request.urlopen(url), 'html.parser')

stext = open('azure-pricing-top.txt', 'w')
section = soup.find_all('section', {'class': 'section section-size3 account-type'})
stext.write(str(section))
stext.close()       

text = open('azure-prices-table.csv', 'w')

i = 0

for sect in section:
    i+=1
    accountType = sect['data-filter'].replace('-filter','-account')

    divs = sect.find_all('div', {'class': 'storage-table'})

    #  th class="show-small" role="presentation - get access tier

    for div in divs:
        redundancy = div['class'][1].replace('_','').upper()

        table = div.find('table').find('tbody')

        for row in table.findAll('tr'):

            storage_SKU = row.find("td").text.replace('*','').replace(',','')


            spans = row.findAll('span', {'class': 'price-data'})

            for sp in spans:
                string_regions = sp.get('data-amount')
                d = json.loads(string_regions)

                if type(d) is dict:
                    for regional in d:
                        for region in d[regional]:

                            text.write(
                                accountType + "," + 
                                redundancy + "," + 
                                region + "," + 
                                storage_SKU + "," +
                                str(d[regional][region]) + 
                                "\n")
        
        # tabletext = open('azure-pricing-dttable'+str(i)+'.txt', 'w')
        datatransfertable = sect.find_all('table')
        datatransferpricespans = datatransfertable[-1].findAll('span', {'class': 'price-data'})[0].get('data-amount')
        
        transferd = json.loads(datatransferpricespans)
        if type(transferd) is dict:
            for regional in transferd:
                for region in transferd[regional]:
                    text.write(
                    accountType + "," + 
                    redundancy + "," + 
                    region + "," + 
                    "Data Transfer (per GB)," + 
                    str(transferd[regional][region]) + 
                    "\n")
        # tabletext.write(str(transferd[regional]))
        # tabletext.close()       
        
text.close()       
