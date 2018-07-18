import urllib.request
from bs4 import BeautifulSoup
import json

url = "https://azure.microsoft.com/en-us/pricing/details/storage/blobs/"
soup = BeautifulSoup(urllib.request.urlopen(url), 'html.parser')

divs = soup.find_all('div', {'class': 'storage-table'})



text = open('azure-prices-table.txt', 'w')

for div in divs:

    redundancy = div['class'][1]

    table = soup.find('table').find('tbody')


    for row in table.findAll('tr'):

        storage_size = row.find('td').text


        #     print(cell)
        #     print("\n")

        

        # if cols['class'] == "column-2":
        #     typestr = "HOT"
        # elif cols['class'] == "column-3":
        #     typestr = "COLD"
        # elif cols['class'] == "column-4":
        #     typestr = "ARCHIVE"

        spans = soup.findAll('span', {'class': 'price-data'})
        for sp in spans:
            string_regions = sp.get('data-amount')
            d = json.loads(string_regions)

            print(d)
            print("\n\n\n")

            for regional in d:
                for region in d[regional]:

                 
                    text.write(redundancy + "\t" + region + "\t" + storage_size + "\t" + str(d[regional][region]) + "\n")

text.close()




        # print(row.text)

       