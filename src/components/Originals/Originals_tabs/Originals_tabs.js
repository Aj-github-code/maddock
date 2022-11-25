import * as React from 'react';
import './Originals_tabs.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import { color } from '@mui/system';
import Originals_synopsi from '../Originals_synopsi/Originals_synopsi';
import Originals_cast from '../Originals_cast/Originals_cast';
import Originals_gallery from '../Originals_gallery/Originals_gallery';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="originals_tabs">
        <Box sx={{ flexGrow: 1, display: 'flex', width: '100%' }}>
            <Box>
                <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    >

                    <Tab label="SYNOPSIS" {...a11yProps(0)} style={{ color:'#fff' }}/>
                    <Tab label="CAST & CREW" {...a11yProps(1)} style={{ color:'#fff' }}/>
                    <Tab label="GALLERY" {...a11yProps(2)} style={{ color:'#fff' }}/>
                    <Tab label="AWARDS" {...a11yProps(3)} style={{ color:'#fff' }}/>
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Originals_synopsi/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Originals_cast />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Originals_gallery />
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            
        </Box>
    </div>
  );
}