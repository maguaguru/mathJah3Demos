import React, { PureComponent } from 'react'
import { Box, Button, TextareaAutosize, Typography } from '@material-ui/core'
import StudentProgress from './StudentProgress'
import { mathJaxUtils } from './../../entities'

const mathMlExpression = '<math:math xmlns:math="http://www.w3.org/1998/Math/MathML" uni:algorithm="1" display="block">\n' +
    '        <mrow>\n' +
    '          <msub>\n' +
    '            <mrow>\n' +
    '              <mover>\n' +
    '                <mrow>\n' +
    '                  <mi>F</mi>\n' +
    '                </mrow>\n' +
    '                <mrow>\n' +
    '                  <mo>&#8594;</mo>\n' +
    '                </mrow>\n' +
    '              </mover>\n' +
    '            </mrow>\n' +
    '            <mrow>\n' +
    '              <mn>1</mn>\n' +
    '            </mrow>\n' +
    '          </msub>\n' +
    '          <mo>=</mo>\n' +
    '          <mo>(</mo>\n' +
    '          <mo>\n' +
    '            1.2\n' +
    '          </mo>\n' +
    '          <mtext>&#8201;</mtext>\n' +
    '          <mo>N</mo>\n' +
    '          <mo>)</mo>\n' +
    '          <mtext>&#8201;</mtext>\n' +
    '          <mover>\n' +
    '            <mrow>\n' +
    '              <mi>i</mi>\n' +
    '            </mrow>\n' +
    '            <mrow>\n' +
    '              <mo>&#770;</mo>\n' +
    '            </mrow>\n' +
    '          </mover>\n' +
    '          <mo>+</mo>\n' +
    '          <mo>(</mo>\n' +
    '          <mo>\n' +
    '            7.4\n' +
    '          </mo>\n' +
    '          <mtext>&#8201;</mtext>\n' +
    '          <mo>N</mo>\n' +
    '          <mo>)</mo>\n' +
    '          <mtext>&#8201;</mtext>\n' +
    '          <mover>\n' +
    '            <mrow>\n' +
    '              <mi>j</mi>\n' +
    '            </mrow>\n' +
    '            <mrow>\n' +
    '              <mo>&#770;</mo>\n' +
    '            </mrow>\n' +
    '          </mover>\n' +
    '        </mrow>\n' +
    '      </math:math>'


let mathSvg

class TexChtmlExample extends PureComponent {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();  }

    componentDidMount() {
        console.log('componentDidMount window.MathJax: ', window.MathJax )
        console.log('componentDidMount mathJah.mathml2svg: ', window.MathJax.mathml2svg)

        mathSvg =  mathJaxUtils.mmlToSvg(mathMlExpression, this.myRef.current)

        console.log('mathSvg: ', mathSvg)
    }

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
                    <StudentProgress
                        pointsRange={[{ points: 5, range: 10 }, { points: 10, range: 60 }, { points: 12, range: 80 }, { points: 15, range: 100 }]}
                        currentProgress={5}
                        highestProgres={100}
                    />
                </Box>
                <Box>
                    <Typography data-testid="mathMlContentHeader" variant="h6" component="h6" gutterBottom>
                        MathMl content view2
                    </Typography>
                </Box>
                <div ref={this.myRef}/>
            </Box>
        )
    }
}
export default TexChtmlExample