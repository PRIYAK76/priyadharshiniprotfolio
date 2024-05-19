import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoMdArrowDropright } from "react-icons/io";
import PropTypes from 'prop-types';

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
const Experience = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const points = ["Developed responsive and visually appealing web applications using HTML, CSS, and JavaScript.",
    "Implemented Bootstrap framework to ensure cross-browser compatibility and mobile responsiveness.",
    "Utilized React.js and Redux for state management and building interactive user interfaces.",
    "Conducted code reviews and implemented best practices to ensure code quality and maintainability."]
  return (
    <div className='container'>

      <div>
        <div class="hr-with-text my-4">
          <span class="hr-text1 about-me-title">Where I have Worked</span>
          <hr />
        </div>

        <Box
          sx={{ flexGrow: 1, bgcolor: 'transparent', display: 'flex', p: 4, width: "100%", height: "fit-content" }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: 'white',
              color: 'white',
              '& .MuiTab-root': { color: 'white' },
              '& .Mui-selected': { color: 'white', fontWeight: 700 },
              '& .MuiTabs-indicator': { backgroundColor: '#64FFda' },
              width: "15%",
            }}
          >
            <Tab label="RiverWorld" {...a11yProps(0)} sx={{ color: 'white' }} />
          </Tabs>
          <TabPanel value={value} index={0} sx={{ color: 'white', width: "90%" }}>
            <h1 className='experience-main-title'>Software Developer 
            <a href="https://www.linkedin.com/in/priyadharshini-krishnakumar-122883227/" target="_blank" rel="noopener noreferrer">
            <span style={{ color: "#64FFda" }}> &nbsp;@RiverWorld Technologies</span>
            </a></h1>
            <p className='about-me-text'>May 2023 - present
            </p>

            <div>
              <ul className="one-column-list arrow-list my-5">
                {points.map((item, index) => (
                  <li key={index}>
                    <IoMdArrowDropright color='#5f9ea0' size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TabPanel>
        </Box>

      </div>
    </div>
  )
}

export default Experience
