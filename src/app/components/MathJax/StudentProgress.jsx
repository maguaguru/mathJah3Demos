import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, makeStyles } from '@material-ui/core'

const WIDTH = 656
const HEIGHT = 24
const LABEL_CONTAINER_WIDTH = 40
const POINTS_LABEL_WIDTH = 31

const useStyles = makeStyles(theme => ({
    studentCurrentProgressIndicator: {
        width: `${HEIGHT}px`,
        height: `${HEIGHT}px`,
        borderRadius: '4px',
        backgroundColor: '#54689F' // theme.palette[indigo400]
    },
    studentHighestProgressIndicator: {
        position: 'relative',
        width: '5px',
        height: '26px',
        borderRadius: '5px',
        backgroundColor: '#131F45', // theme.palette[indigo900]
        border: 'solid 1px white'
    }
}))

const StudentProgress = ({ width = WIDTH, pointsRange, currentProgress, highestProgres }) => {
    const classes = useStyles()
    const patch = `M0.5 4C0.5 2.067 2.067 0.5 4 0.5H652C653.933 0.5 ${width} 2.067 ${width} 4V23.5H4C2.067 ${HEIGHT} 0.5 21.933 0.5 20V4Z`
    const viewBox = `0 -2 ${width + 1} 30`

    let labelShift = POINTS_LABEL_WIDTH

    return (
        <Box>
            <Typography variant="caption" data-testid="studentProgressLabel">Progress</Typography>
            <Box display="flex" flexDirection="row" data-testid="studentProgressBar">

                <svg width="100%" height="30" viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d={patch} stroke="#727272" />
                    {
                        currentProgress && currentProgress > 0 &&
                        <rect
                            data-testid="studentCurrentProgressBar"
                            x="0" y="0" width={width / 100 * currentProgress} height={HEIGHT}
                            fill="#54689F" rx={4}
                        />
                    }
                    {highestProgres && highestProgres > 0 &&
                    <rect
                        data-testid="studentHighestProgressBar"
                        x={width / 100 * highestProgres} y="0" width="5" height={HEIGHT + 4}
                        fill="#131F45" rx={4} stroke="rgb(255,255,255)" strokeWidth="1" transform="translate(-2.5, -2)"
                    />}
                    {pointsRange.map(pointRange => (
                        <g key={pointRange.points} transform="scale(1)">
                            {pointRange.range < 100 &&
                            <line data-testid={`studentProgressDivider${pointRange.range}`} x1={width / 100 * pointRange.range} y1="0" x2={width / 100 * pointRange.range} y2={HEIGHT} stroke="gray" />}
                            <line data-testid={`studentPointsDivider${pointRange.points}`} x1={width / 100 * pointRange.range} y1={HEIGHT} x2={width / 100 * pointRange.range} y2={HEIGHT + 5} stroke="black" />
                        </g>
                    )
                    )}
                </svg>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="flex-start">
                <Typography variant="caption" data-testid="studentPointsLabel">Points</Typography>
                {pointsRange.map((pointRange, index) => {
                    labelShift += index === 0 ? LABEL_CONTAINER_WIDTH / 2 : LABEL_CONTAINER_WIDTH

                    return (
                        <Box key={`pointLabel${pointRange.points}`} style={{ position: 'relative', left: `${pointRange.range}%` }}>
                            <Box width={`${LABEL_CONTAINER_WIDTH}px`} display="flex" flexDirection="row" justifyContent="center" style={{ position: 'relative', right: `${labelShift}px` }}>
                                <Typography variant="caption">{pointRange.points}</Typography>
                            </Box>
                        </Box>
                    )
                }

                )}
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" flexWrap="wrap">

                <Box display="flex" flexDirection="row" flexWrap="wrap">

                    <Box display="flex" flexDirection="column" py={1}>
                        <Box display="flex" flexDirection="row">
                            <Box className={classes.studentCurrentProgressIndicator} data-testid="studentCurrentProgressIndicator" />
                            <Box px={1}>
                                <Typography variant="body1" data-testid="studentCurrentProgressLabel">
                                    Current Progress: {currentProgress && currentProgress > 0
                                        ? <strong>{currentProgress}%</strong> : '-'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" py={1} pl={1}>
                        <Box display="flex" flexDirection="row">
                            <Box className={classes.studentHighestProgressIndicator} data-testid="studentHighestProgressIndicator" />
                            <Box px={2}>
                                <Typography variant="body1" data-testid="studentHighestProgressLabel">
                                    Highest Progress: {highestProgres && highestProgres > 0
                                        ? <strong>{highestProgres}%</strong> : '-'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>

        </Box>)

}

StudentProgress.propTypes = {
    pointsRange: PropTypes.arrayOf(PropTypes.shape({
        points: PropTypes.number,
        range: PropTypes.number
    })).isRequired,
    currentProgress: PropTypes.number,
    highestProgres: PropTypes.number,
    width: PropTypes.number
}

export default StudentProgress