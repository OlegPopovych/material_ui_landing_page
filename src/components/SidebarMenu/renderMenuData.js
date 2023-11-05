import { Fragment } from 'react';
import { Colors } from '../../styles';
import menuData from './menuData';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Divider,
  List,
  ListItemButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

const renderMenuTree = (data = menuData) => {
  return (
    <List>
      {data.map(({ id, name, children = null }) => (
        <Fragment key={id}>
          {children ? (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: Colors.white }} />}
              >
                <Typography>{name}</Typography>
              </AccordionSummary>
              <AccordionDetails>{renderMenuTree(children)}</AccordionDetails>
            </Accordion>
          ) : (
            <ListItemButton>{name}</ListItemButton>
          )}
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default renderMenuTree;
