function calcRem(){

    let fontBase    = parseInt( document.getElementById( 'font-base' ) .value );
    let desiredSize = parseInt( document.getElementById( 'desired-size' ).value );

    if( ! Number.isInteger( desiredSize ) ) {
        console.log( 'Not a Number' );
        return;
    }

    let remSize = Math.round( desiredSize * Math.pow( 10, 8 ) / fontBase ) / Math.pow( 10, 8 );
    let lineHeight = Math.round( 26 * Math.pow( 10, 8 ) / desiredSize ) / Math.pow( 10, 8 );

    document.getElementById( 'rem-size' ).value = remSize.toString() + 'rem';
    document.getElementById( 'line-height' ).value = lineHeight.toString();
}

function reset() {
    document.querySelectorAll( 'input[type=text]' ).value = '';
}