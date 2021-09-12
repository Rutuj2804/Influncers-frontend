import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const QAndAElement = ({ question, answer }) => {
    return (
        <div className="aAndAElement__Wrapper" >
            <Accordion className="mb-2" >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography >{question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    {answer}
                </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default QAndAElement
