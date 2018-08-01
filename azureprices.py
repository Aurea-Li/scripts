import urllib.request
from bs4 import BeautifulSoup
import json

url = "https://azure.microsoft.com/en-us/pricing/details/storage/blobs/"
soup = BeautifulSoup(urllib.request.urlopen(url), 'html.parser')

section = soup.find_all('section', {'class': 'section section-size3 account-type'})

text = open('azure-prices-table.txt', 'w')

for sect in section:
    accountType = sect['data-filter'].replace('-filter','-account')

    divs = sect.find_all('div', {'class': 'storage-table'})

    for div in divs:
        redundancy = div['class'][1].replace('_','').upper()

        table = div.find('table').find('tbody')

        for row in table.findAll('tr'):

            storage_size = row.find("td").text


            spans = row.findAll('span', {'class': 'price-data'})

            for sp in spans:
                string_regions = sp.get('data-amount')
                d = json.loads(string_regions)

                if type(d) is dict:
                    for regional in d:
                        for region in d[regional]:

                            text.write(
                                accountType + "\t" + 
                                redundancy + "\t" + 
                                region + "\t" + 
                                storage_size + "\t" + 
                                str(d[regional][region]) + 
                                "\n")
text.close()       