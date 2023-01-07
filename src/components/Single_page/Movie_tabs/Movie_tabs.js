import * as React from 'react';
import LazyLoad from 'react-lazy-load';
import './Movie_tabs.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Movie_synopsi from '../Movie_synopsi/Movie_synopsi';
import Movie_cast from '../Movie_cast/Movie_cast';
import Movie_gallery from '../Movie_gallery/Movie_gallery';
import Movie_awards from '../Movie_awards/Movie_awards';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { color } from '@mui/system';
const LazySynopsis = React.lazy(() => import('../Movie_synopsi/Movie_synopsi'));


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
        <Box sx={{ p: 3 }} >
          <Typography >{children}</Typography>
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
            <TabPanel value={value} index={0} style={{ width: "100%"}}>
              <ErrorBoundary>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazySynopsis/>
                </Suspense>
              </ErrorBoundary>
              {/* <LazyLoad> */}
              {/* <Movie_synopsi/> */}
              {/* </LazyLoad> */}
            </TabPanel>
            <TabPanel value={value} index={1} style={{ width: "100%"}}>
                <Movie_cast />
            </TabPanel>
            <TabPanel value={value} index={2} style={{ width: "100%"}}>
                <Movie_gallery />
            </TabPanel>
            <TabPanel value={value} index={3} style={{ width: "100%"}}>
                <Movie_awards/>
            </TabPanel>
            
        </Box>
    </div>
  );
}