import React, { PureComponent } from 'react'
import { Box, Button, TextareaAutosize, Typography } from '@material-ui/core'

class TexChtmlExample extends PureComponent {

    render () {
        return (
            <Box p={2}>
                <Typography data-testid="mathMlContentHeader" variant="h6" component="h6" gutterBottom>
                    MathMl content
                </Typography>
                <TextareaAutosize data-testid="mathMlContentHeader" aria-label="minimum height" rowsMin={10} placeholder="Put mathMl context" />
                <Box py={1}>
                    <Button data-testid="applyMathMlContent" variant="contained" color="primary">
                        Apply
                    </Button>
                </Box>
                <Typography data-testid="mathMlContentHeader" variant="h6" component="h6" gutterBottom>
                    MathMl content view
                </Typography>
                <Box>
                    <iframe src="http:/localhost:9000/mathJax.html" />
                </Box>
            </Box>
        )
    }
}
export default TexChtmlExample