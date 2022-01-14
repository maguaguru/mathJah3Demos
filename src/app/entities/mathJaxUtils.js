
const mmlToSvg = (mathMlExpression, node) => {
    console.log('mathJah: ', window.MathJax)
    console.log('mathJah.mathml2svg: ', window.MathJax.mathml2svg)

    //let node = document.querySelector('#math');
    let options = MathJax.getMetricsFor(node, true);

    console.log('options: ', options)
    let chtml = window.MathJax.tex2svg('\\sqrt{x^2+1}', options);
    let svg = window.MathJax.mathml2svg(mathMlExpression, options)
    node.appendChild(svg);

    return chtml
    //return window.MathJax.mathml2svg(mathMlExpression, {} )
}

export default {
    mmlToSvg
}