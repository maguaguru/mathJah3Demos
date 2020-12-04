import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
    Box,
    Hidden,
    Typography,
    Tooltip,
    makeStyles,
    isWidthDown,
    withWidth
} from '@material-ui/core'

const PROGRESS_BAR_HEIGHT = 24
const LABEL_CONTAINER_WIDTH = 40
const POINTS_LABEL_WIDTH = 31

const useStyles = makeStyles(theme => ({
    studentProgressBar: {
        width: '100%',
        height: `${PROGRESS_BAR_HEIGHT}px`,
        border: 'solid 1px #727272', // theme.palette[grey400]
        borderRadius: '5px 5px 0 5px'
    },
    progressDivider: {
        width: '1px',
        height: `${PROGRESS_BAR_HEIGHT}px`,
        borderLeft: 'solid 1px #CCCCCC' // theme.palette[grey200]
    },
    pointsDivider: {
        width: '1px',
        height: '4px',
        borderLeft: 'solid 1px #727272'
    },
    studentCurrentProgressIndicator: {
        width: `${PROGRESS_BAR_HEIGHT}px`,
        height: `${PROGRESS_BAR_HEIGHT}px`,
        borderRadius: '4px',
        backgroundColor: '#54689F' // theme.palette[indigo400]
    },
    studentHighestProgressIndicator: {
        position: 'relative',
        width: '5px',
        height: '28px',
        borderRadius: '4px',
        backgroundColor: '#131F45', // theme.palette[indigo900]
        border: 'solid 1px white'
    },
    studentCurrentProgressBar: {
        position: 'relative',
        width: ({ currentProgress = 0 }) => `${currentProgress}%`,
        height: `${PROGRESS_BAR_HEIGHT}px`,
        backgroundColor: '#54689F', // theme.palette[indigo400]
        borderRadius: '4px 0 0 4px'
    },
    prodressDividerRow: {
        position: 'relative',
        top: `-${PROGRESS_BAR_HEIGHT}px`
    }
}))

const StudentProgress = ({
    isMobile,
    pointsRange,
    currentProgress,
    highestProgres
}) => {
    const classes = useStyles({ currentProgress })
    let labelShift = isMobile ? 0 : POINTS_LABEL_WIDTH

    return (
        <Box>
            <Typography variant="body2" data-testid="studentProgressTitle">You’ll see your progress once you start the assignment</Typography>
            <Typography variant="caption" color="textSecondary" data-testid="studentProgressLabel">Progress</Typography>

            <Box data-testid="studentProgressBar" className={classes.studentProgressBar}>
                {
                    currentProgress && currentProgress > 0 &&
                        <Box data-testid="studentCurrentProgressBar" className={classes.studentCurrentProgressBar} />
                }

                <Box className={classes.prodressDividerRow} display="flex" flexDirection="row">
                    {pointsRange.map((pointRange, index) => (
                        <Fragment key={index}>
                            {pointRange.range < 100 &&
                            <Tooltip key={`progressToolTip${pointRange.points}`} title={`${pointRange.range}% progress required`} placement="bottom-start">
                                <Box
                                    key={`progressDivider${pointRange.points}`}
                                    data-testid={`studentProgressDivider${pointRange.range}`}
                                    className={classes.progressDivider}
                                    style={{ position: 'relative', left: `${pointRange.range}%`, transform: `translate(-${index + 2}px, 0)` }}
                                />
                            </Tooltip>}
                        </Fragment>
                    )
                    )}
                </Box>

                {highestProgres && highestProgres > 0 &&
                    <Box data-testid="studentHighestProgressBar" className={classes.studentHighestProgressIndicator} style={{ position: 'relative', left: `${highestProgres}%`, top: `-${PROGRESS_BAR_HEIGHT * 2}px`, transform: 'translate(-3px, -3px)' }} />}
            </Box>

            <Box display="flex" flexDirection="row">
                {pointsRange.map((pointRange, index) => (
                    <Box
                        key={`pointsDivider${pointRange.points}`}
                        data-testid={`studentPointsDivider${pointRange.points}`}
                        className={classes.pointsDivider}
                        style={{ position: 'relative', left: `${pointRange.range}%`, transform: `translate(-${index + 1}px, 0)` }}
                    />
                )
                )}
            </Box>

            <Box display="flex" flexDirection="row">
                {!isMobile &&
                <Typography variant="caption" color="textSecondary" data-testid="studentPointsLabel">Points</Typography>}
                {pointsRange.map((pointRange, index) => {
                    labelShift += index === 0 ? LABEL_CONTAINER_WIDTH / 2 : LABEL_CONTAINER_WIDTH

                    return (
                        <Box key={`pointLabel${pointRange.points}`} style={{ position: 'relative', left: `${pointRange.range}%` }}>
                            <Box width={`${LABEL_CONTAINER_WIDTH}px`} display="flex" flexDirection="row" justifyContent="center" style={{ position: 'relative', right: `${labelShift}px` }}>
                                <Typography variant="caption" color="textSecondary">{pointRange.points}</Typography>
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
    isMobile: PropTypes.bool,
    currentProgress: PropTypes.number,
    highestProgres: PropTypes.number
}

export default StudentProgress