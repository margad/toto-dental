import { Pagination, Center } from '@mantine/core';
import { TableSort } from '~/components/tablesort';

export default function DashboardCheckups() {

  const data = [
    {
      "name": "Athena Weissnat",
      "company": "Little - Rippin",
      "email": "Elouise.Prohaska@yahoo.com"
    },
    {
      "name": "Deangelo Runolfsson",
      "company": "Greenfelder - Krajcik",
      "email": "Kadin_Trantow87@yahoo.com"
    },
    {
      "name": "Danny Carter",
      "company": "Kohler and Sons",
      "email": "Marina3@hotmail.com"
    },
  ];

  return (
    <>
      <TableSort data={data}/>
      <Center>
        <Pagination total={4} style={{marginTop: 30}} />
      </Center>
    </>
  );
}