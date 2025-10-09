// This component is generated to trigger the rule: cs-js:no-irregular-whitespace
import { LightningElement } from 'lwc';

export default class noirregularwhitespaceTrigger extends LightningElement {
    // Rule: disallow irregular whitespace outside of strings and comments
    connectedCallback() {
        // This component triggers: cs-js:no-irregular-whitespace
        console.log('Triggering rule: cs-js:no-irregular-whitespace');
        var vtChar = "";

        // Form Feed (U+000C)
        var ffChar = "";

        // No-Break Space (U+00A0)
        var nbspChar = " ";

        // Next Line (U+0085)
        var nelChar = "";

        // Ogham Space Mark (U+1680)
        var oghamSpace = " ";

        // Mongolian Vowel Separator (U+180E)
        var mvsChar = "᠎";

        // Zero Width No-Break Space / BOM (U+FEFF)
        var bomChar = "﻿";

        // En Quad (U+2000)
        var  enQuad = " ";

        // Em Quad (U+2001)
        var emQuad = " ";

        // En Space (U+2002)
        var enSpace = " ";

        // Em Space (U+2003)
        var emSpace = " ";

        // Three-Per-Em (U+2004)
        var threePerEm = " ";

        // Four-Per-Em (U+2005)
        var  fourPerEm = " ";

        // Six-Per-Em (U+2006)
        var sixPerEm = " ";

        // Figure Space (U+2007)
        var figureSpace = " ";

        // Punctuation Space (U+2008)
        var punctuationSpace = " ";

        // Thin Space (U+2009)
        var thinSpace = " ";

        // Hair Space (U+200A)
        var hairSpace = " ";

        // Zero Width Space (U+200B) - invisible
        var​x = 5; // Contains Zero Width Space between "var" and "x"

        // Line Separator (U+2028)
        var lineSeparator = " ";

        // Paragraph Separator (U+2029)
        var paragraphSeparator = " ";

        // Narrow No-Break Space (U+202F)
        var narrowNbsp = " ";

        // Medium Mathematical Space (U+205F)
        var mathSpace = " ";

        // Ideographic Space (U+3000)
        var ideographicSpace = "　";

        var lineWithSeparator = "test᠎";
    }
}