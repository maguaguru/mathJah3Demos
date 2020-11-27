import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, makeStyles } from '@material-ui/core'

const DEFAULT_WIDTH = 656
const DEFAULT_HEIGHT = 30

const useStyles = makeStyles(theme => ({
    studentCurrentProgressIndicator: {
        width: '24px',
        height: '24px',
        borderRadius: '4px',
        backgroundColor: '#54689F' // theme.palette[indigo400]
    },
    studentHighestProgressIndicator: {
        width: '4px',
        height: '28px',
        borderRadius: '4px',
        backgroundColor: '#131F45' // theme.palette[indigo900]
    }
}))

const StudentProgress = ({ width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT, pointsRange }, ...props) => {
    const classes = useStyles()

    return (
        <Box>
            <Typography variant="body1" data-testid="studentProgressLabel">Progress</Typography>
            <Box display="flex" flexDirection="row" data-testid="studentProgressBar">
                <svg width={width} height={height} viewBox="0 0 656 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0.5 4C0.5 2.067 2.067 0.5 4 0.5H652C653.933 0.5 655.5 2.067 655.5 4V23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z" stroke="#727272" />
                    {pointsRange.map((pointRange, index) =>
                        (
                            <g key={pointRange.points}>
                                <line x1={width / 100 * pointRange.range} y1="0" x2={width / 100 * pointRange.range} y2={height} stroke="gray" />
                                <line x1={width / 100 * pointRange.range} y1={height} x2={width / 100 * pointRange.range} y2={height + 5} stroke="black" />
                            </g>
                        )
                    )}
                </svg>
            </Box>
            <Box display="flex" flexDirection="row">
                <Typography variant="body1" data-testid="studentPointsLabel">Points</Typography>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">

                <Box display="flex" flexDirection="row" flexWrap="wrap">

                    <Box display="flex" flexDirection="column" py={1}>
                        <Box display="flex" flexDirection="row">
                            <Box className={classes.studentCurrentProgressIndicator} data-testid="studentCurrentProgressIndicator" />
                            <Box px={1}>
                                <Typography variant="body1" data-testid="studentCurrentProgressLabel">Current Progress:</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" py={1} pl={1}>
                        <Box display="flex" flexDirection="row">
                            <Box className={classes.studentHighestProgressIndicator} data-testid="studentHighestProgressIndicator" />
                            <Box px={2}>
                                <Typography variant="body1" data-testid="studentHighestProgressLabel">Highest Progress:</Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>

        </Box>)

}

StudentProgress.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    pointsRange: PropTypes.arrayOf(PropTypes.shape({
        points: PropTypes.number,
        range: PropTypes.number
    })).isRequired,
    currentProgress: PropTypes.number,
    highestProgres: PropTypes.number
}

export default StudentProgress