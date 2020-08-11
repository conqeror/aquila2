import React from "react";
import { Container, Typography, Box, Link } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { ExpandMore } from "@material-ui/icons";
import { useGetCiphersQuery, GetCiphersQuery } from "../../generated/graphql";

const renderCiphers = (data: GetCiphersQuery | undefined, loading: boolean) => {
  if (!data || loading) {
    return null;
  } else {
    return data.ciphers_aggregate.nodes.map((cipher) => (
      <div key={cipher.cipher_number} style={{ marginTop: 20 }}>
        <Typography variant="h5">
          Šifra {cipher.cipher_number}: {cipher.cipher_code}
        </Typography>
        <Typography paragraph>
          <Link href={cipher.url || "#"}>Zadanie</Link>
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
          >
            <Typography>Hint</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{cipher.hint_text}</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
          >
            <Typography>Riešenie</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{cipher.solution_text}</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    ));
  }
};

export const After: React.FC = () => {
  const { data, loading } = useGetCiphersQuery();
  return (
    <Container>
      <Box pt={5}>
        <Typography variant="h2" gutterBottom align="center">
          Výsledky
        </Typography>
        <iframe
          width={1000}
          height={600}
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRqNyDe11T2CsRLJoLnAdpR7rjh0dovOzpaJdNoHn7UMVcVLtg_2Gi2MkY-F6X94g/pubhtml?gid=800460217&amp;single=true&amp;widget=true&amp;headers=false"
        ></iframe>
        <Typography variant="h2" gutterBottom align="center">
          Šifry
        </Typography>
        {renderCiphers(data, loading)}
        <Typography variant="h2" gutterBottom align="center">
          Trasy
        </Typography>
        <iframe
          width={1000}
          height={600}
          src="https://www.google.com/maps/d/u/0/embed?mid=1X_ST7OnOwvFAXPyuUMYX8IL1YGKyDbNt"
        ></iframe>
        <Typography variant="h2" gutterBottom align="center">
          Poďakovanie
        </Typography>
        <Typography paragraph>
          Za pomoc pri organizácii by sme chceli poďakovať:
        </Typography>
        <ul>
          <li>
            <Typography>
              Kike Prešinskej, Majkovi Švagerkovi, Malicovi Handlovičovi, Peťovi
              Kováčovi a Olimu za externé testovanie šifier
            </Typography>
          </li>
          <li>
            <Typography>
              Firme VacuumLabs sa pomoc pri tlačení šifier
            </Typography>
          </li>
          <li>
            <Typography>
              Danke Kuruczovej za pomoc pri rozdávaní obálok v Brne
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
};
