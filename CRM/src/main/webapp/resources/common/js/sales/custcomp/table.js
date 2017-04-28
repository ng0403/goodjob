/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

$(document).ready(function() {
    $('#example').DataTable();
} );
/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));



//리스트 갯수
/*!
DataTables 1.10.15
©2008-2017 SpryMedia Ltd - datatables.net/license
*/
(function(h){"function"===typeof define&&define.amd?define(["jquery"],function(E){return h(E,window,document)}):"object"===typeof exports?module.exports=function(E,H){E||(E=window);H||(H="undefined"!==typeof window?require("jquery"):require("jquery")(E));return h(H,E,E.document)}:h(jQuery,window,document)})(function(h,E,H,k){function Y(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),
d[c]=e,"o"===b[1]&&Y(a[e])});a._hungarianMap=d}function J(a,b,c){a._hungarianMap||Y(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),J(a[d],b[d],c)):b[d]=b[e]})}function Fa(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");
a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&fb(a)}function gb(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");"boolean"===typeof a.scrollX&&(a.scrollX=
a.scrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&J(m.models.oSearch,a[b])}function hb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;"number"===typeof b&&!h.isArray(b)&&(a.aDataSort=[b])}function ib(a){if(!m.__browser){var b={};m.__browser=b;var c=h("<div/>").css({position:"fixed",top:0,left:-1*h(E).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",
top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function jb(a,b,c,d,e,f){var g,j=!1;c!==k&&(g=c,j=!0);for(;d!==
e;)a.hasOwnProperty(d)&&(g=j?b(g,a[d],d,a):a[d],j=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:H.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=
e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(hb(c),J(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));var g=b.mData,j=R(g),i=b.mRender?R(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};
b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b._setter=null;b.fnGetData=function(a,b,c){var d=j(a,b,k,c);return i&&b?i(d,b,a,c):d};b.fnSetData=function(a,b,c){return S(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=
d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Z(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&ma(a);s(a,null,"column-sizing",[a])}function $(a,b){var c=na(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function aa(a,b){var c=na(a,"bVisible"),c=h.inArray(b,
c);return-1!==c?c:null}function ba(a){var b=0;h.each(a.aoColumns,function(a,d){d.bVisible&&"none"!==h(d.nTh).css("display")&&b++});return b}function na(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,j,i,h,l,q,r;e=0;for(f=b.length;e<f;e++)if(l=b[e],r=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(j=d.length;g<j;g++){i=0;for(h=c.length;i<h;i++){r[i]===k&&(r[i]=B(a,i,e,"type"));
q=d[g](r[i],a);if(!q&&g!==d.length-1)break;if("html"===q)break}if(q){l.sType=q;break}}l.sType||(l.sType="string")}}function kb(a,b,c,d){var e,f,g,j,i,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var q=n.targets!==k?n.targets:n.aTargets;h.isArray(q)||(q=[q]);f=0;for(g=q.length;f<g;f++)if("number"===typeof q[f]&&0<=q[f]){for(;l.length<=q[f];)Ga(a);d(q[f],n)}else if("number"===typeof q[f]&&0>q[f])d(l.length+q[f],n);else if("string"===typeof q[f]){j=0;for(i=l.length;j<i;j++)("_all"==q[f]||h(l[j].nTh).hasClass(q[f]))&&
d(j,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function N(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,j=0,i=g.length;j<i;j++)g[j].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function oa(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=Ka(a,e);return N(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,
f=a.aoColumns[c],g=a.aoData[b]._aData,j=f.sDefaultContent,i=f.fnGetData(g,d,{settings:a,row:b,col:c});if(i===k)return a.iDrawError!=e&&null===j&&(K(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b+", column "+c,4),a.iDrawError=e),j;if((i===g||null===i)&&null!==j&&d!==k)i=j;else if("function"===typeof i)return i.call(g);return null===i&&"display"==d?"":i}function lb(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,d,{settings:a,row:b,col:c})}
function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\\./g,".")})}function R(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=R(c))});return function(a,c,f,g){var j=b[c]||b._;return j!==k?j(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,f){var g,j;if(""!==f){j=La(f);
for(var i=0,n=j.length;i<n;i++){f=j[i].match(ca);g=j[i].match(V);if(f){j[i]=j[i].replace(ca,"");""!==j[i]&&(a=a[j[i]]);g=[];j.splice(0,i+1);j=j.join(".");if(h.isArray(a)){i=0;for(n=a.length;i<n;i++)g.push(c(a[i],b,j))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){j[i]=j[i].replace(V,"");a=a[j[i]]();continue}if(null===a||a[j[i]]===k)return k;a=a[j[i]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function S(a){if(h.isPlainObject(a))return S(a._);
if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,j,i=0,n=e.length-1;i<n;i++){g=e[i].match(ca);j=e[i].match(V);if(g){e[i]=e[i].replace(ca,"");a[e[i]]=[];f=e.slice();f.splice(0,i+1);g=f.join(".");if(h.isArray(d)){j=0;for(n=d.length;j<n;j++)f={},b(f,d[j],g),a[e[i]].push(f)}else a[e[i]]=d;return}j&&(e[i]=e[i].replace(V,
""),a=a[e[i]](d));if(null===a[e[i]]||a[e[i]]===k)a[e[i]]={};a=a[e[i]]}if(f.match(V))a[f.replace(V,"")](d);else a[f.replace(ca,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function pa(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function qa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function da(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var j=e.anCells;if(j)if(d!==k)g(j[d],d);else{c=0;for(f=j.length;c<f;c++)g(j[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,j,i=0,n,l=a.aoColumns,q=a._rowReadObject,d=d!==k?d:q?{}:[],r=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
-1!==c&&(c=a.substring(c+1),S(a)(d,b.getAttribute(c)))}},m=function(a){if(c===k||c===i)j=l[i],n=h.trim(a.innerHTML),j&&j._bAttrSrc?(S(j.mData._)(d,n),r(j.mData.sort,a),r(j.mData.type,a),r(j.mData.filter,a)):q?(j._setter||(j._setter=S(j.mData)),j._setter(d,n)):d[i]=n;i++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)m(f),e.push(f);f=f.nextSibling}else{e=b.anCells;f=0;for(g=e.length;f<g;f++)m(e[f])}if(b=b.firstChild?b:b.nTr)(b=b.getAttribute("id"))&&S(a.rowId)(d,b);return{data:d,cells:e}}
function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],j,i,n,l,q;if(null===e.nTr){j=c||H.createElement("tr");e.nTr=j;e.anCells=g;j._DT_RowIndex=b;Na(a,e);l=0;for(q=a.aoColumns.length;l<q;l++){n=a.aoColumns[l];i=c?d[l]:H.createElement(n.sCellType);i._DT_CellIndex={row:b,column:l};g.push(i);if((!c||n.mRender||n.mData!==l)&&(!h.isPlainObject(n.mData)||n.mData._!==l+".display"))i.innerHTML=B(a,b,l,"display");n.sClass&&(i.className+=" "+n.sClass);n.bVisible&&!c?j.appendChild(i):!n.bVisible&&c&&i.parentNode.removeChild(i);
n.fnCreatedCell&&n.fnCreatedCell.call(a.oInstance,i,B(a,b,l),f,b,l)}s(a,"aoRowCreatedCallback",null,[j,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?sa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function mb(a){var b,c,d,e,f,g=a.nTHead,j=a.nTFoot,i=0===
h("th, td",g).length,n=a.oClasses,l=a.aoColumns;i&&(e=h("<tr/>").appendTo(g));b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),i&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);i&&ea(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
if(null!==j){a=a.aoFooter[0];b=0;for(c=a.length;b<c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function fa(a,b,c){var d,e,f,g=[],j=[],i=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=i-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);j.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=i=1,j[d][f]===k){a.appendChild(g[d][f].cell);
for(j[d][f]=1;g[d+i]!==k&&g[d][f].cell==g[d+i][f].cell;)j[d+i][f]=1,i++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<i;c++)j[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",i).attr("colspan",n)}}}}function O(a){var b=s(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,j="ssp"==y(a),i=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=j?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=
-1);var g=a._iDisplayStart,n=a.fnDisplayEnd();if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(j){if(!a.bDestroying&&!nb(a))return}else a.iDraw++;if(0!==i.length){f=j?a.aoData.length:n;for(j=j?0:g;j<f;j++){var l=i[j],q=a.aoData[l];null===q.nTr&&Ja(a,l);l=q.nTr;if(0!==e){var r=d[c%e];q._sRowStripe!=r&&(h(l).removeClass(q._sRowStripe).addClass(r),q._sRowStripe=r)}s(a,"aoRowCallback",null,[l,q._aData,c,j]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:
f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ba(a),"class":a.oClasses.sRowEmpty}).html(c))[0];s(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,i]);s(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,i]);d=h(a.nTBody);d.children().detach();d.append(h(b));s(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function T(a,b){var c=a.oFeatures,d=c.bFilter;
c.bSort&&ob(a);d?ga(a,a.oPreviousSearch):a.aiDisplay=a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;O(a);a._drawHold=!1}function pb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,j,i,n,l,q,k=0;k<f.length;k++){g=null;j=f[k];if("<"==j){i=h("<div/>")[0];
n=f[k+1];if("'"==n||'"'==n){l="";for(q=2;f[k+q]!=n;)l+=f[k+q],q++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),i.id=n[0].substr(1,n[0].length-1),i.className=n[1]):"#"==l.charAt(0)?i.id=l.substr(1,l.length-1):i.className=l;k+=q}e.append(i);e=h(i)}else if(">"==j)e=e.parent();else if("l"==j&&d.bPaginate&&d.bLengthChange)g=qb(a);else if("f"==j&&d.bFilter)g=rb(a);else if("r"==j&&d.bProcessing)g=sb(a);else if("t"==j)g=tb(a);else if("i"==j&&d.bInfo)g=ub(a);else if("p"==
j&&d.bPaginate)g=vb(a);else if(0!==m.ext.feature.length){i=m.ext.feature;q=0;for(n=i.length;q<n;q++)if(j==i[q].cFeature){g=i[q].fnInit(a);break}}g&&(i=a.aanFeatures,i[j]||(i[j]=[]),i[j].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function ea(a,b){var c=h(b).children("tr"),d,e,f,g,j,i,n,l,q,k;a.splice(0,a.length);f=0;for(i=c.length;f<i;f++)a.push([]);f=0;for(i=c.length;f<i;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");
q=1*e.getAttribute("rowspan");l=!l||0===l||1===l?1:l;q=!q||0===q||1===q?1:q;g=0;for(j=a[f];j[g];)g++;n=g;k=1===l?!0:!1;for(j=0;j<l;j++)for(g=0;g<q;g++)a[f+g][n+j]={cell:e,unique:k},a[f+g].nTr=d}e=e.nextSibling}}}function ta(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],ea(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ua(a,b,c){s(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},
e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,j=a.oInstance,i=function(b){s(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){var c=b.error||b.sError;c&&K(a,0,c);a.json=b;i(b)},dataType:"json",cache:!1,type:a.sServerMethod,error:function(b,c){var d=s(a,null,"xhr",
[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==c?K(a,0,"Invalid JSON response",1):4===b.readyState&&K(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;s(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(j,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),i,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(j,b,i,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function nb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,
!0),ua(a,wb(a),function(b){xb(a,b)}),!1):!0}function wb(a){var b=a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,j=[],i,n,l,k=W(a);g=a._iDisplayStart;i=!1!==d.bPaginate?a._iDisplayLength:-1;var r=function(a,b){j.push({name:a,value:b})};r("sEcho",a.iDraw);r("iColumns",c);r("sColumns",D(b,"sName").join(","));r("iDisplayStart",g);r("iDisplayLength",i);var ra={draw:a.iDraw,columns:[],order:[],start:g,length:i,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],
l=f[g],i="function"==typeof n.mData?"function":n.mData,ra.columns.push({data:i,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),r("mDataProp_"+g,i),d.bFilter&&(r("sSearch_"+g,l.sSearch),r("bRegex_"+g,l.bRegex),r("bSearchable_"+g,n.bSearchable)),d.bSort&&r("bSortable_"+g,n.bSortable);d.bFilter&&(r("sSearch",e.sSearch),r("bRegex",e.bRegex));d.bSort&&(h.each(k,function(a,b){ra.order.push({column:b.col,dir:b.dir});r("iSortCol_"+a,b.col);r("sSortDir_"+
a,b.dir)}),r("iSortingCols",k.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?j:ra:b?j:ra}function xb(a,b){var c=va(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}pa(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)N(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;O(a);a._bInitComplete||
wa(a,b);a.bAjaxDataGet=!0;C(a,!1)}function va(a,b){var c=h.isPlainObject(a.ajax)&&a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?R(c)(b):b}function rb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',j=d.sSearch,j=j.match(/_INPUT_/)?j.replace("_INPUT_",g):j+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(j)),f=function(){var b=!this.value?
"":this.value;b!=e.sSearch&&(ga(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,O(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,i=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",g?Qa(f,g):f).on("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{i[0]!==H.activeElement&&i.val(e.sSearch)}catch(d){}});
return b[0]}function ga(a,b,c){var d=a.oPreviousSearch,e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){yb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)zb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);Ab(a)}else f(b);a.bFiltered=!0;s(a,null,"search",[a])}function Ab(a){for(var b=
m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<g;f++){for(var j=[],i=0,n=c.length;i<n;i++)e=c[i],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,i)&&j.push(e);c.length=0;h.merge(c,j)}}function zb(a,b,c,d,e,f){if(""!==b){for(var g=[],j=a.aiDisplay,d=Ra(b,d,e,f),e=0;e<j.length;e++)b=a.aoData[j[e]]._aFilterData[c],d.test(b)&&g.push(j[e]);a.aiDisplay=g}}function yb(a,b,c,d,e,f){var d=Ra(b,d,e,f),f=a.oPreviousSearch.sSearch,g=a.aiDisplayMaster,j,e=[];0!==m.ext.search.length&&(c=!0);j=Bb(a);if(0>=b.length)a.aiDisplay=
g.slice();else{if(j||c||f.length>b.length||0!==b.indexOf(f)||a.bSorted)a.aiDisplay=g.slice();b=a.aiDisplay;for(c=0;c<b.length;c++)d.test(a.aoData[b[c]]._sFilterRow)&&e.push(b[c]);a.aiDisplay=e}}function Ra(a,b,c,d){a=b?a:Sa(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function Bb(a){var b=a.aoColumns,c,d,e,f,g,j,i,h,l=m.ext.type.search;c=!1;
d=0;for(f=a.aoData.length;d<f;d++)if(h=a.aoData[d],!h._aFilterData){j=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(i=B(a,d,e,"filter"),l[c.sType]&&(i=l[c.sType](i)),null===i&&(i=""),"string"!==typeof i&&i.toString&&(i=i.toString())):i="",i.indexOf&&-1!==i.indexOf("&")&&(xa.innerHTML=i,i=$b?xa.textContent:xa.innerText),i.replace&&(i=i.replace(/[\r\n]/g,"")),j.push(i);h._aFilterData=j;h._sFilterRow=j.join("  ");c=!0}return c}function Cb(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,
caseInsensitive:a.bCaseInsensitive}}function Db(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function ub(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Eb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Eb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+
1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),g=a.fnRecordsDisplay(),j=g?c.sInfo:c.sInfoEmpty;g!==f&&(j+=" "+c.sInfoFiltered);j+=c.sInfoPostFix;j=Fb(a,j);c=c.fnInfoCallback;null!==c&&(j=c.call(a.oInstance,a,d,e,f,g,j));h(b).html(j)}}function Fb(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,
f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ha(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){pb(a);mb(a);fa(a,a.aoHeader);fa(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=v(f.sWidth));s(a,null,"preInit",[a]);T(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ua(a,[],function(c){var f=va(a,c);for(b=0;b<f.length;b++)N(a,f[b]);a.iInitDisplayStart=
d;T(a);C(a,!1);wa(a,c)},a):(C(a,!1),wa(a))}else setTimeout(function(){ha(a)},200)}function wa(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Z(a);s(a,null,"plugin-init",[a,b]);s(a,"aoInitComplete","init",[a,b])}function Ta(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Ua(a);s(a,null,"length",[a,c])}function qb(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,j=f.length;g<j;g++)e[0][g]=
new Option(d[g],f[g]);var i=h("<div><label/></div>").addClass(b.sLength);a.aanFeatures.l||(i[0].id=c+"_length");i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",i).val(a._iDisplayLength).on("change.DT",function(){Ta(a,h(this).val());O(a)});h(a.nTable).on("length.dt.DT",function(b,c,d){a===c&&h("select",i).val(d)});return i[0]}function vb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){O(a)},b=h("<div/>").addClass(a.oClasses.sPaging+
b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,i=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===i,b=l?0:Math.ceil(b/i),i=l?1:Math.ceil(h/i),h=c(b,i),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,i)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Va(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&
(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:K(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(s(a,null,"page",[a]),c&&O(a));return b}function sb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");
s(a,null,"processing",[a,b])}function tb(a){var b=h(a.nTable);b.attr("role","grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),j=g.length?g[0]._captionSide:null,i=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");l.length||(l=null);i=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",
{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",width:c.sXInner||"100%"}).append(i.removeAttr("id").css("margin-left",0).append("top"===j?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:v(d)}).append(b));l&&i.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:v(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",
0).append("bottom"===j?g:null).append(b.children("tfoot")))));var b=i.children(),k=b[0],f=b[1],r=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(r.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=r;a.aoDrawCallback.push({fn:ma,sName:"scrolling"});return i[0]}function ma(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,j=f.children("div"),i=j[0].style,n=j.children("table"),
j=a.nScrollBody,l=h(j),q=j.style,r=h(a.nScrollFoot).children("div"),m=r.children("table"),p=h(a.nTHead),o=h(a.nTable),t=o[0],s=t.style,u=a.nTFoot?h(a.nTFoot):null,x=a.oBrowser,U=x.bScrollOversize,ac=D(a.aoColumns,"nTh"),P,L,Q,w,Wa=[],y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};L=j.scrollHeight>j.clientHeight;if(a.scrollBarVis!==L&&a.scrollBarVis!==k)a.scrollBarVis=L,Z(a);else{a.scrollBarVis=L;o.children("thead, tfoot").remove();
u&&(Q=u.clone().prependTo(o),P=u.find("tr"),Q=Q.find("tr"));w=p.clone().prependTo(o);p=p.find("tr");L=w.find("tr");w.find("th, td").removeAttr("tabindex");c||(q.width="100%",f[0].style.width="100%");h.each(ta(a,w),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});u&&I(function(a){a.style.width=""},Q);f=o.outerWidth();if(""===c){s.width="100%";if(U&&(o.find("tbody").height()>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(o.outerWidth()-b);f=o.outerWidth()}else""!==d&&(s.width=
v(d),f=o.outerWidth());I(C,L);I(function(a){z.push(a.innerHTML);Wa.push(v(h(a).css("width")))},L);I(function(a,b){if(h.inArray(a,ac)!==-1)a.style.width=Wa[b]},p);h(L).height(0);u&&(I(C,Q),I(function(a){A.push(a.innerHTML);y.push(v(h(a).css("width")))},Q),I(function(a,b){a.style.width=y[b]},P),h(Q).height(0));I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+z[b]+"</div>";a.style.width=Wa[b]},L);u&&I(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+
A[b]+"</div>";a.style.width=y[b]},Q);if(o.outerWidth()<f){P=j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(U&&(j.scrollHeight>j.offsetHeight||"scroll"==l.css("overflow-y")))s.width=v(P-b);(""===c||""!==d)&&K(a,1,"Possible column misalignment",6)}else P="100%";q.width=v(P);g.width=v(P);u&&(a.nScrollFoot.style.width=v(P));!e&&U&&(q.height=v(t.offsetHeight+b));c=o.outerWidth();n[0].style.width=v(c);i.width=v(c);d=o.height()>j.clientHeight||"scroll"==l.css("overflow-y");e="padding"+
(x.bScrollbarLeft?"Left":"Right");i[e]=d?b+"px":"0px";u&&(m[0].style.width=v(c),r[0].style.width=v(c),r[0].style[e]=d?b+"px":"0px");o.children("colgroup").insertBefore(o.children("thead"));l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)j.scrollTop=0}}function I(a,b,c){for(var d=0,e=0,f=b.length,g,j;e<f;){g=b[e].firstChild;for(j=c?c[e].firstChild:null;g;)1===g.nodeType&&(c?a(g,j,d):a(g,d),d++),g=g.nextSibling,j=c?j.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,
e=d.sY,f=d.sX,g=d.sXInner,j=c.length,i=na(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,r=!1,m,p,o=a.oBrowser,d=o.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<i.length;m++)p=c[i[m]],null!==p.sWidth&&(p.sWidth=Gb(p.sWidthOrig,k),r=!0);if(d||!r&&!f&&!e&&j==ba(a)&&j==n.length)for(m=0;m<j;m++)i=$(a,m),null!==i&&(c[i].sWidth=v(n.eq(m).width()));else{j=h(b).clone().css("visibility","hidden").removeAttr("id");j.find("tbody tr").remove();var t=h("<tr/>").appendTo(j.find("tbody"));
j.find("thead, tfoot").remove();j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());j.find("tfoot th, tfoot td").css("width","");n=ta(a,j.find("thead")[0]);for(m=0;m<i.length;m++)p=c[i[m]],n[m].style.width=null!==p.sWidthOrig&&""!==p.sWidthOrig?v(p.sWidthOrig):"",p.sWidthOrig&&f&&h(n[m]).append(h("<div/>").css({width:p.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(a.aoData.length)for(m=0;m<i.length;m++)r=i[m],p=c[r],h(Hb(a,r)).clone(!1).append(p.sContentPadding).appendTo(t);h("[name]",
j).removeAttr("name");p=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(j).appendTo(k);f&&g?j.width(g):f?(j.css("width","auto"),j.removeAttr("width"),j.width()<k.clientWidth&&l&&j.width(k.clientWidth)):e?j.width(k.clientWidth):l&&j.width(l);for(m=e=0;m<i.length;m++)k=h(n[m]),g=k.outerWidth()-k.width(),k=o.bBounding?Math.ceil(n[m].getBoundingClientRect().width):k.outerWidth(),e+=k,c[i[m]].sWidth=v(k-g);b.style.width=v(e);p.remove()}l&&(b.style.width=
v(l));if((l||f)&&!a._reszEvt)b=function(){h(E).on("resize.DT-"+a.sInstance,Qa(function(){Z(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function Gb(a,b){if(!a)return 0;var c=h("<div/>").css("width",v(a)).appendTo(b||H.body),d=c[0].offsetWidth;c.remove();return d}function Hb(a,b){var c=Ib(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Ib(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace(bc,
""),c=c.replace(/&nbsp;/g," "),c.length>d&&(d=c.length,e=f);return e}function v(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function W(a){var b,c,d=[],e=a.aoColumns,f,g,j,i;b=a.aaSortingFixed;c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){i=n[a][0];f=e[i].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],j=e[g].sType||
"string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:i,col:g,dir:n[a][1],index:n[a]._idx,type:j,formatter:m.ext.type.order[j+"-pre"]})}return d}function ob(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=0,j,i=a.aiDisplayMaster,h;Ia(a);h=W(a);b=0;for(c=h.length;b<c;b++)j=h[b],j.formatter&&g++,Jb(a,j.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=i.length;b<c;b++)d[i[b]]=b;g===h.length?i.sort(function(a,b){var c,e,g,j,i=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=
0;g<i;g++)if(j=h[g],c=k[j.col],e=m[j.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===j.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):i.sort(function(a,b){var c,g,j,i,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(j=0;j<k;j++)if(i=h[j],c=m[i.col],g=p[i.col],i=e[i.type+"-"+i.dir]||e["string-"+i.dir],c=i(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Kb(a){for(var b,c,d=a.aoColumns,e=W(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var j=c.asSorting;b=c.sTitle.replace(/<.*?>/g,
"");var i=c.nTh;i.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(i.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=j[e[0].index+1]||j[0]):c=j[0],b+="asc"===c?a.sSortAscending:a.sSortDescending);i.setAttribute("aria-label",b)}}function Xa(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,
D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);T(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Ya(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Xa(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Xa(a,c,b.shiftKey,d))})}
function ya(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=W(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Jb(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,aa(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],j=0,i=a.aoData.length;j<i;j++)if(c=a.aoData[j],
c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[j]:B(a,j,b,"sort"),c._aSortData[b]=g?g(f):f}function za(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Cb(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Cb(a.aoPreSearchCols[d])}})};s(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,
b)}}function Lb(a,b,c){var d,e,f=a.aoColumns,b=function(b){if(b&&b.time){var g=s(a,"aoStateLoadParams","stateLoadParams",[a,b]);if(-1===h.inArray(!1,g)&&(g=a.iStateDuration,!(0<g&&b.time<+new Date-1E3*g)&&!(b.columns&&f.length!==b.columns.length))){a.oLoadedState=h.extend(!0,{},b);b.start!==k&&(a._iDisplayStart=b.start,a.iInitDisplayStart=b.start);b.length!==k&&(a._iDisplayLength=b.length);b.order!==k&&(a.aaSorting=[],h.each(b.order,function(b,c){a.aaSorting.push(c[0]>=f.length?[0,c[1]]:c)}));b.search!==
k&&h.extend(a.oPreviousSearch,Db(b.search));if(b.columns){d=0;for(e=b.columns.length;d<e;d++)g=b.columns[d],g.visible!==k&&(f[d].bVisible=g.visible),g.search!==k&&h.extend(a.aoPreSearchCols[d],Db(g.search))}s(a,"aoStateLoaded","stateLoaded",[a,b])}}c()};if(a.oFeatures.bStateSave){var g=a.fnStateLoadCallback.call(a.oInstance,a,b);g!==k&&b(g)}else c()}function Aa(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function K(a,b,c,d){c="DataTables warning: "+(a?"table id="+a.sTableId+
" - ":"")+c;d&&(c+=". For more information about this error, please see http://datatables.net/tn/"+d);if(b)E.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&s(a,null,"error",[a,d,c]),"alert"==b)alert(c);else{if("throw"==b)throw Error(c);"function"==typeof b&&b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Mb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],
h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Ya(a,b,c){h(a).on("click.DT",b,function(b){a.blur();c(b)}).on("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).on("selectstart.DT",function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function s(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+
".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Ua(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function ia(a,b){var c=[],c=Nb.numbers_length,d=Math.floor(c/2);b<=c?c=X(0,b):a<=d?(c=X(0,
c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=X(b-(c-2),b):(c=X(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function fb(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Za)},"html-num":function(b){return Ba(b,a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Za)}},function(b,c){x.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(x.type.search[b+a]=x.type.search.html)})}function Ob(a){return function(){var b=
[Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(Aa(this[x.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=
function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&ma(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};
this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();
return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return Aa(this[x.iApiIndex])};
this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=x.fnVersionCheck;var b=this,c=a===k,d=this.length;c&&(a={});this.oApi=this.internal=x.internal;for(var e in m.ext.internal)e&&(this[e]=Ob(e));this.each(function(){var e={},g=1<d?Mb(e,a,!0):
a,j=0,i,e=this.getAttribute("id"),n=!1,l=m.defaults,q=h(this);if("table"!=this.nodeName.toLowerCase())K(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{gb(l);hb(l.column);J(l,l,!0);J(l.column,l.column,!0);J(l,h.extend(g,q.data()));var r=m.settings,j=0;for(i=r.length;j<i;j++){var p=r[j];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&p.nTFoot.parentNode==this){var t=g.bRetrieve!==k?g.bRetrieve:l.bRetrieve;if(c||t)return p.oInstance;if(g.bDestroy!==k?g.bDestroy:l.bDestroy){p.oInstance.fnDestroy();
break}else{K(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){r.splice(j,1);break}}if(null===e||""===e)this.id=e="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:q[0].style.width,sInstance:e,sTableId:e});o.nTable=this;o.oApi=b.internal;o.oInit=g;r.push(o);o.oInstance=1===b.length?b:q.dataTable();gb(g);g.oLanguage&&Fa(g.oLanguage);g.aLengthMenu&&!g.iDisplayLength&&(g.iDisplayLength=h.isArray(g.aLengthMenu[0])?g.aLengthMenu[0][0]:g.aLengthMenu[0]);
g=Mb(h.extend(!0,{},l),g);F(o.oFeatures,g,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o,g,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],
["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(o.oScroll,g,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,g,"fnInfoCallback");z(o,"aoDrawCallback",g.fnDrawCallback,"user");z(o,"aoServerParams",g.fnServerParams,"user");z(o,"aoStateSaveParams",g.fnStateSaveParams,"user");z(o,"aoStateLoadParams",g.fnStateLoadParams,"user");z(o,"aoStateLoaded",g.fnStateLoaded,
"user");z(o,"aoRowCallback",g.fnRowCallback,"user");z(o,"aoRowCreatedCallback",g.fnCreatedRow,"user");z(o,"aoHeaderCallback",g.fnHeaderCallback,"user");z(o,"aoFooterCallback",g.fnFooterCallback,"user");z(o,"aoInitComplete",g.fnInitComplete,"user");z(o,"aoPreDrawCallback",g.fnPreDrawCallback,"user");o.rowIdFn=R(g.rowId);ib(o);var u=o.oClasses;g.bJQueryUI?(h.extend(u,m.ext.oJUIClasses,g.oClasses),g.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&
!o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(u,m.ext.classes,g.oClasses);q.addClass(u.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=g.iDisplayStart,o._iDisplayStart=g.iDisplayStart);null!==g.iDeferLoading&&(o.bDeferLoading=!0,e=h.isArray(g.iDeferLoading),o._iRecordsDisplay=e?g.iDeferLoading[0]:g.iDeferLoading,o._iRecordsTotal=e?g.iDeferLoading[1]:g.iDeferLoading);var v=o.oLanguage;h.extend(!0,v,g.oLanguage);v.sUrl&&(h.ajax({dataType:"json",url:v.sUrl,success:function(a){Fa(a);
J(l.oLanguage,a);h.extend(true,v,a);ha(o)},error:function(){ha(o)}}),n=!0);null===g.asStripeClasses&&(o.asStripeClasses=[u.sStripeOdd,u.sStripeEven]);var e=o.asStripeClasses,x=q.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(e,function(a){return x.hasClass(a)}))&&(h("tbody tr",this).removeClass(e.join(" ")),o.asDestroyStripes=e.slice());e=[];r=this.getElementsByTagName("thead");0!==r.length&&(ea(o.aoHeader,r[0]),e=ta(o));if(null===g.aoColumns){r=[];j=0;for(i=e.length;j<i;j++)r.push(null)}else r=
g.aoColumns;j=0;for(i=r.length;j<i;j++)Ga(o,e?e[j]:null);kb(o,g.aoColumnDefs,r,function(a,b){la(o,a,b)});if(x.length){var w=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(x[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=w(b,"sort")||w(b,"order"),e=w(b,"filter")||w(b,"search");if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(o,a)}}})}var U=o.oFeatures,
e=function(){if(g.aaSorting===k){var a=o.aaSorting;j=0;for(i=a.length;j<i;j++)a[j][1]=o.aoColumns[j].asSorting[0]}ya(o);U.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=W(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});s(o,null,"order",[o,a,b]);Kb(o)}});z(o,"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||U.bDeferRender)&&ya(o)},"sc");var a=q.children("caption").each(function(){this._captionSide=h(this).css("caption-side")}),b=q.children("thead");b.length===0&&(b=h("<thead/>").appendTo(q));
o.nTHead=b[0];b=q.children("tbody");b.length===0&&(b=h("<tbody/>").appendTo(q));o.nTBody=b[0];b=q.children("tfoot");if(b.length===0&&a.length>0&&(o.oScroll.sX!==""||o.oScroll.sY!==""))b=h("<tfoot/>").appendTo(q);if(b.length===0||b.children().length===0)q.addClass(u.sNoFooter);else if(b.length>0){o.nTFoot=b[0];ea(o.aoFooter,o.nTFoot)}if(g.aaData)for(j=0;j<g.aaData.length;j++)N(o,g.aaData[j]);else(o.bDeferLoading||y(o)=="dom")&&oa(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();
o.bInitialised=true;n===false&&ha(o)};g.bStateSave?(U.bStateSave=!0,z(o,"aoDrawCallback",za,"state_save"),Lb(o,g,e)):e()}});b=null;return this},x,t,p,u,$a={},Pb=/[\r\n]/g,Ca=/<.*?>/g,cc=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,dc=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Za=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,M=function(a){return!a||!0===a||"-"===a?!0:!1},Qb=function(a){var b=parseInt(a,10);return!isNaN(b)&&
isFinite(a)?b:null},Rb=function(a,b){$a[b]||($a[b]=RegExp(Sa(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace($a[b],"."):a},ab=function(a,b,c){var d="string"===typeof a;if(M(a))return!0;b&&d&&(a=Rb(a,b));c&&d&&(a=a.replace(Za,""));return!isNaN(parseFloat(a))&&isFinite(a)},Sb=function(a,b,c){return M(a)?!0:!(M(a)||"string"===typeof a)?null:ab(a.replace(Ca,""),b,c)?!0:null},D=function(a,b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<
f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},X=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Tb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},sa=function(a){var b;a:{if(!(2>a.length)){b=a.slice().sort();for(var c=b[0],d=1,e=b.length;d<e;d++){if(b[d]===c){b=!1;break a}c=b[d]}}b=!0}if(b)return a.slice();
b=[];var e=a.length,f,g=0,d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b};m.util={throttle:function(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,h=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,h)},c)):(d=g,a.apply(b,h))}},escapeRegex:function(a){return a.replace(dc,"\\$1")}};var A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},ca=/\[.*?\]$/,V=/\(\)$/,Sa=m.util.escapeRegex,xa=h("<div>")[0],$b=xa.textContent!==k,bc=
/<.*?>/g,Qa=m.util.throttle,Ub=[],w=Array.prototype,ec=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof
t))return new t(a,b);var c=[],d=function(a){(a=ec(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=sa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Ub)};m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:w.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=
this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(w.filter)b=w.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:w.join,indexOf:w.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,i,n,l=this.context,
m,p,u=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var s=new t(l[g]);if("table"===b)f=c.call(s,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(s,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===b||"row"===b||"cell"===b){p=this[g];"column-rows"===b&&(m=Da(l[g],u.opts));i=0;for(n=p.length;i<n;i++)f=p[i],f="cell"===b?c.call(s,l[g],f.row,f.column,g,i):c.call(s,l[g],f,g,i,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?
e.concat.apply([],e):e),b=a.selector,b.rows=u.rows,b.cols=u.cols,b.opts=u.opts,a):this},lastIndexOf:w.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(w.map)b=w.map.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:w.pop,push:w.push,reduce:w.reduce||function(a,b){return jb(this,a,b,0,this.length,
1)},reduceRight:w.reduceRight||function(a,b){return jb(this,a,b,this.length-1,-1,-1)},reverse:w.reverse,selector:null,shift:w.shift,slice:function(){return new t(this.context,this)},sort:w.sort,splice:w.splice,toArray:function(){return w.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},unique:function(){return new t(this.context,sa(this))},unshift:w.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=
b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Ub,g,j,c=0,d=e.length;c<d;c++){g=(j=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var i;a:{i=0;for(var n=f.length;i<n;i++)if(f[i].name===g){i=
f[i];break a}i=null}i||(i={name:g,val:{},methodExt:[],propExt:[]},f.push(i));c===d-1?i.val=b:f=j?i.methodExt:i.propExt}};t.registerPlural=u=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,
d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});u("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});u("tables().body()","table().body()",function(){return this.iterator("table",function(a){return a.nTBody},1)});u("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});u("tables().footer()",
"table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});u("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===a?O(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),T(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Va(b,a)})});p("page.info()",function(){if(0===
this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a.oFeatures.bPaginate?a._iDisplayLength:-1,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ta(b,a)})});var Vb=function(a,b,c){if(c){var d=new t(a);
d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))T(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ua(a,[],function(c){pa(a);for(var c=va(a,c),d=0,e=c.length;d<e;d++)N(a,c[d]);T(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});p("ajax.url()",function(a){var b=
this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Vb(c,!1===b,a)})});var bb=function(a,b,c,d,e){var f=[],g,j,i,n,l,m;i=typeof b;if(!b||"string"===i||"function"===i||b.length===k)b=[b];i=0;for(n=b.length;i<n;i++){j=b[i]&&b[i].split&&!b[i].match(/[\[\(:]/)?b[i].split(","):
[b[i]];l=0;for(m=j.length;l<m;l++)(g=c("string"===typeof j[l]?h.trim(j[l]):j[l]))&&g.length&&(f=f.concat(g))}a=x.selector[a];if(a.length){i=0;for(n=a.length;i<n;i++)f=a[i](d,e,f)}return sa(f)},cb=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},db=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,
d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var j=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===j?[]:X(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==j?c.slice():"applied"==j?g.slice():h.map(c,function(a){return-1===h.inArray(a,g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==j?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==j||0<=e&&"applied"==j)&&f.push(c))}return f};
p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=b,f;return bb("row",a,function(a){var b=Qb(a);if(b!==null&&!e)return[b];f||(f=Da(c,e));if(b!==null&&h.inArray(b,f)!==-1)return[b];if(a===null||a===k||a==="")return f;if(typeof a==="function")return h.map(f,function(b){var e=c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Tb(ja(c.aoData,f,"nTr"));if(a.nodeName){if(a._DT_RowIndex!==k)return[a._DT_RowIndex];if(a._DT_CellIndex)return[a._DT_CellIndex.row];
b=h(a).closest("*[data-dt-row]");return b.length?[b.data("dt-row")]:[]}if(typeof a==="string"&&a.charAt(0)==="#"){var i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,"rows",function(a,b){return ja(a.aoData,b,"_aData")},
1)});u("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});u("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){da(b,c,a)})});u("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});u("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<
g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});u("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c],g,h,i,n,l;e.splice(c,1);g=0;for(h=e.length;g<h;g++)if(i=e[g],l=i.anCells,null!==i.nTr&&(i.nTr._DT_RowIndex=g),null!==l){i=0;for(n=l.length;i<n;i++)l[i]._DT_CellIndex.row=g}qa(b.aiDisplayMaster,c);qa(b.aiDisplay,c);qa(a[d],c,!1);Ua(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});
this.iterator("table",function(a){for(var c=0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(oa(b,c)[0]):h.push(N(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return db(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:
k;b[0].aoData[this[0]]._aData=a;da(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?oa(b,a)[0]:N(b,a)});return this.row(b[0])});var eb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=
k,c._details=k},Wb=function(a,b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",
function(a,b){if(e===b)for(var c,d=ba(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&eb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)eb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,
b){if(h.isArray(a)||a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ba(d),e.push(c[0]))};f(a,b);c._details&&c._details.detach();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Wb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Wb(this,!1);
return this});p(["row().child.remove()","row().child().remove()"],function(){eb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var fc=/^([^:]+):(name|visIdx|visible)$/,Xb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=cb(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,
j=D(g,"sName"),i=D(g,"nTh");return bb("column",e,function(a){var b=Qb(a);if(a==="")return X(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Xb(c,f,0,0,e),i[f])?f:null})}var k=typeof a==="string"?a.match(fc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(j,function(a,b){return a===
k[1]?b:null});default:return[]}if(a.nodeName&&a._DT_CellIndex)return[a._DT_CellIndex.column];b=h(i).filter(a).map(function(){return h.inArray(this,i)}).toArray();if(b.length||!a.nodeName)return b;b=h(a).closest("*[data-dt-column]");return b.length?[b.data("dt-column")]:[]},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});u("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});u("columns().footer()","column().footer()",
function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});u("columns().data()","column().data()",function(){return this.iterator("column-rows",Xb,1)});u("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].mData},1)});u("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});u("columns().nodes()",
"column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});u("columns().visible()","column().visible()",function(a,b){var c=this.iterator("column",function(b,c){if(a===k)return b.aoColumns[c].bVisible;var f=b.aoColumns,g=f[c],j=b.aoData,i,n,l;if(a!==k&&g.bVisible!==a){if(a){var m=h.inArray(!0,D(f,"bVisible"),c+1);i=0;for(n=j.length;i<n;i++)l=j[i].nTr,f=j[i].anCells,l&&l.insertBefore(f[c],f[m]||null)}else h(D(b.aoData,"anCells",c)).detach();
g.bVisible=a;fa(b,b.aoHeader);fa(b,b.aoFooter);za(b)}});a!==k&&(this.iterator("column",function(c,e){s(c,null,"column-visibility",[c,e,a,b])}),(b===k||b)&&this.columns.adjust());return c});u("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===a?aa(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Z(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===
a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return aa(c,b)}});p("column()",function(a,b){return db(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",function(b){var d=a,e=cb(c),f=b.aoData,g=Da(b,e),j=Tb(ja(f,g,"anCells")),i=h([].concat.apply([],j)),l,n=b.aoColumns.length,m,p,u,t,s,v;return bb("cell",d,function(a){var c=typeof a==="function";
if(a===null||a===k||c){m=[];p=0;for(u=g.length;p<u;p++){l=g[p];for(t=0;t<n;t++){s={row:l,column:t};if(c){v=f[l];a(s,B(b,l,t),v.anCells?v.anCells[t]:null)&&m.push(s)}else m.push(s)}}return m}if(h.isPlainObject(a))return[a];c=i.filter(a).map(function(a,b){return{row:b._DT_CellIndex.row,column:b._DT_CellIndex.column}}).toArray();if(c.length||!a.nodeName)return c;v=h(a).closest("*[data-dt-row]");return v.length?[{row:v.data("dt-row"),column:v.data("dt-column")}]:[]},b,e)});var d=this.columns(b,c),e=this.rows(a,
c),f,g,j,i,n,l=this.iterator("table",function(a,b){f=[];g=0;for(j=e[b].length;g<j;g++){i=0;for(n=d[b].length;i<n;i++)f.push({row:e[b][g],column:d[b][i]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});u("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b])&&a.anCells?a.anCells[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});u("cells().cache()","cell().cache()",function(a){a=
"search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});u("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});u("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,column:c,columnVisible:aa(a,c)}},1)});u("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){da(b,c,a,d)})});p("cell()",
function(a,b,c){return db(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;lb(b[0],c[0].row,c[0].column,a);da(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:k;"number"===typeof a?a=[[a,b]]:a.length&&!h.isArray(a[0])&&(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});
p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p("order.fixed()",function(a){if(!a){var b=this.context,b=b.length?b[0].aaSortingFixed:k;return h.isArray(b)?{pre:b}:b}return this.iterator("table",function(b){b.aaSortingFixed=h.extend(!0,{},a)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=
this.context;return a===k?0!==e.length?e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ga(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});u("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?
!0:c,bCaseInsensitive:null===d?!0:d}),ga(e,e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){za(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),
a=a.split("."),c,d,e=0,f=a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;if(a instanceof m.Api)return!0;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,
function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});return b?new t(c):c};m.camelToHungarian=J;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0]=h.map(a[0].split(/\s/),function(a){return!a.match(/\.dt\b/)?a+".dt":a}).join(" ");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",
function(a){pa(a)})});p("settings()",function(){return new t(this.context,this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,j=b.nTFoot,i=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),
p;b.bDestroying=!0;s(b,"aoDestroyCallback","destroy",[b]);a||(new t(b)).columns().visible(!0);k.off(".DT").find(":not(tbody *)").off(".DT");h(E).off(".DT-"+b.sInstance);e!=g.parentNode&&(i.children("thead").detach(),i.append(g));j&&e!=j.parentNode&&(i.children("tfoot").detach(),i.append(j));b.aaSorting=[];b.aaSortingFixed=[];ya(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+
", td span."+d.sSortIcon,g).detach(),h("th, td",g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";i[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),i.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column",
"row","cell"],function(a,b){p(b+"s().every()",function(a){var d=this.selector.opts,e=this;return this.iterator(b,function(f,g,h,i,m){a.call(e[b](g,"cell"===b?h:d,"cell"===b?d:k),g,h,i,m)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=R(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.15";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,
_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults=
{aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,
this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+
"_"+location.pathname,JSON.stringify(b))}catch(c){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",
sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};
Y(m.defaults);m.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};Y(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,
bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],
aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,
aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=
this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=x={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},
header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(x,{afnFiltering:x.search,aTypes:x.type.detect,ofnSearch:x.type.search,oSort:x.type.order,afnSortData:x.order,aoFeatures:x.feature,oApi:x.internal,oStdClasses:x.classes,oPagination:x.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",
sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",
sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Yb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,
m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",
sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Yb+" ui-corner-tl ui-corner-tr",sJUIFooter:Yb+" ui-corner-bl ui-corner-br"});var Nb=m.ext.pager;h.extend(Nb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[ia(a,
b)]},simple_numbers:function(a,b){return["previous",ia(a,b),"next"]},full_numbers:function(a,b){return["first","previous",ia(a,b),"next","last"]},first_last_numbers:function(a,b){return["first",ia(a,b),"last"]},_numbers:ia,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,j=a.oLanguage.oPaginate,i=a.oLanguage.oAria.paginate||{},m,l,p=0,r=function(b,d){var k,t,u,s,v=function(b){Va(a,b.data.action,true)};k=0;for(t=d.length;k<t;k++){s=d[k];if(h.isArray(s)){u=
h("<"+(s.DT_el||"div")+"/>").appendTo(b);r(u,s)}else{m=null;l="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":m=j.sFirst;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "previous":m=j.sPrevious;l=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":m=j.sNext;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":m=j.sLast;l=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:m=s+1;l=e===s?g.sPageButtonActive:""}if(m!==null){u=h("<a>",{"class":g.sPageButton+
" "+l,"aria-controls":a.sTableId,"aria-label":i[s],"data-dt-idx":p,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(m).appendTo(b);Ya(u,{action:s},v);p++}}}},t;try{t=h(b).find(H.activeElement).data("dt-idx")}catch(u){}r(h(b).empty(),d);t!==k&&h(b).find("[data-dt-idx="+t+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&!cc.test(a))return null;var b=Date.parse(a);
return null!==b&&!isNaN(b)||M(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return ab(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Sb(a,c,!0)?"html-num-fmt"+c:null},function(a){return M(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return M(a)?a:"string"===typeof a?a.replace(Pb," ").replace(Ca,""):""},string:function(a){return M(a)?
a:"string"===typeof a?a.replace(Pb," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Rb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(x.type.order,{"date-pre":function(a){return Date.parse(a)||-Infinity},"html-pre":function(a){return M(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return M(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<
b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});fb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);
h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});var Zb=function(a){return"string"===typeof a?a.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,
"&quot;"):a};m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",h=parseFloat(f);if(isNaN(h))return Zb(f);h=h.toFixed(c);f=Math.abs(h);h=parseInt(f,10);f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}},text:function(){return{display:Zb}}};h.extend(m.ext.internal,{_fnExternApiFunc:Ob,_fnBuildAjax:ua,_fnAjaxUpdate:nb,_fnAjaxParameters:wb,_fnAjaxUpdateDraw:xb,
_fnAjaxDataSrc:va,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:Z,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:aa,_fnVisbleColumns:ba,_fnGetColumns:na,_fnColumnTypes:Ia,_fnApplyColumnDefs:kb,_fnHungarianMap:Y,_fnCamelToHungarian:J,_fnLanguageCompat:Fa,_fnBrowserDetect:ib,_fnAddData:N,_fnAddTr:oa,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},_fnGetCellData:B,_fnSetCellData:lb,
_fnSplitObjNotation:La,_fnGetObjectDataFn:R,_fnSetObjectDataFn:S,_fnGetDataMaster:Ma,_fnClearTable:pa,_fnDeleteIndex:qa,_fnInvalidate:da,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:mb,_fnDrawHead:fa,_fnDraw:O,_fnReDraw:T,_fnAddOptionsHtml:pb,_fnDetectHeader:ea,_fnGetUniqueThs:ta,_fnFeatureHtmlFilter:rb,_fnFilterComplete:ga,_fnFilterCustom:Ab,_fnFilterColumn:zb,_fnFilter:yb,_fnFilterCreateSearch:Ra,_fnEscapeRegex:Sa,_fnFilterData:Bb,_fnFeatureHtmlInfo:ub,_fnUpdateInfo:Eb,_fnInfoMacros:Fb,_fnInitialise:ha,
_fnInitComplete:wa,_fnLengthChange:Ta,_fnFeatureHtmlLength:qb,_fnFeatureHtmlPaginate:vb,_fnPageChange:Va,_fnFeatureHtmlProcessing:sb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:tb,_fnScrollDraw:ma,_fnApplyToChildren:I,_fnCalculateColumnWidths:Ha,_fnThrottle:Qa,_fnConvertToWidth:Gb,_fnGetWidestNode:Hb,_fnGetMaxLenString:Ib,_fnStringToCss:v,_fnSortFlatten:W,_fnSort:ob,_fnSortAria:Kb,_fnSortListener:Xa,_fnSortAttachListener:Oa,_fnSortingClasses:ya,_fnSortData:Jb,_fnSaveState:za,_fnLoadState:Lb,_fnSettingsFromNode:Aa,
_fnLog:K,_fnMap:F,_fnBindAction:Ya,_fnCallbackReg:z,_fnCallbackFire:s,_fnLengthOverflow:Ua,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;m.$=h;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable});



//페이징
/*!
DataTables Bootstrap 3 integration
©2011-2015 SpryMedia Ltd - datatables.net/license
*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(a){return b(a,window,document)}):"object"===typeof exports?module.exports=function(a,d){a||(a=window);if(!d||!d.fn.dataTable)d=require("datatables.net")(a,d).$;return b(d,a,a.document)}:b(jQuery,window,document)})(function(b,a,d,m){var e=b.fn.dataTable;b.extend(!0,e.defaults,{dom:"<'ui stackable grid'<'row'<'eight wide column'l><'right aligned eight wide column'f>><'row dt-table'<'sixteen wide column'tr>><'row'<'seven wide column'i><'right aligned nine wide column'p>>>",
renderer:"semanticUI"});b.extend(e.ext.classes,{sWrapper:"dataTables_wrapper dt-semanticUI",sFilter:"dataTables_filter ui input",sProcessing:"dataTables_processing ui segment",sPageButton:"paginate_button item"});e.ext.renderer.pageButton.semanticUI=function(h,a,r,s,j,n){var o=new e.Api(h),t=h.oClasses,k=h.oLanguage.oPaginate,u=h.oLanguage.oAria.paginate||{},f,g,p=0,q=function(a,d){var e,i,l,c,m=function(a){a.preventDefault();!b(a.currentTarget).hasClass("disabled")&&o.page()!=a.data.action&&o.page(a.data.action).draw("page")};
e=0;for(i=d.length;e<i;e++)if(c=d[e],b.isArray(c))q(a,c);else{g=f="";switch(c){case "ellipsis":f="&#x2026;";g="disabled";break;case "first":f=k.sFirst;g=c+(0<j?"":" disabled");break;case "previous":f=k.sPrevious;g=c+(0<j?"":" disabled");break;case "next":f=k.sNext;g=c+(j<n-1?"":" disabled");break;case "last":f=k.sLast;g=c+(j<n-1?"":" disabled");break;default:f=c+1,g=j===c?"active":""}l=-1===g.indexOf("disabled")?"a":"div";f&&(l=b("<"+l+">",{"class":t.sPageButton+" "+g,id:0===r&&"string"===typeof c?
h.sTableId+"_"+c:null,href:"#","aria-controls":h.sTableId,"aria-label":u[c],"data-dt-idx":p,tabindex:h.iTabIndex}).html(f).appendTo(a),h.oApi._fnBindAction(l,{action:c},m),p++)}},i;try{i=b(a).find(d.activeElement).data("dt-idx")}catch(v){}q(b(a).empty().html('<div class="ui stackable pagination menu"/>').children(),s);i!==m&&b(a).find("[data-dt-idx="+i+"]").focus()};b(d).on("init.dt",function(a,d){if("dt"===a.namespace&&b.fn.dropdown){var e=new b.fn.dataTable.Api(d);b("div.dataTables_length select",
e.table().container()).dropdown()}});return e});



/*
 * # Semantic UI - 2.2.6
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,n,i){e.site=e.fn.site=function(o){var a,r,s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),f=e.isPlainObject(o)?e.extend(!0,{},e.site.settings,o):e.extend({},e.site.settings),m=f.namespace,g=f.error,p="module-"+m,h=e(n),v=h,b=this,y=v.data(p);return a={initialize:function(){a.instantiate()},instantiate:function(){a.verbose("Storing instance of site",a),y=a,v.data(p,a)},normalize:function(){a.fix.console(),a.fix.requestAnimationFrame()},fix:{console:function(){a.debug("Normalizing window.console"),console!==i&&console.log!==i||(a.verbose("Console not available, normalizing events"),a.disable.console()),"undefined"!=typeof console.group&&"undefined"!=typeof console.groupEnd&&"undefined"!=typeof console.groupCollapsed||(a.verbose("Console group not available, normalizing events"),t.console.group=function(){},t.console.groupEnd=function(){},t.console.groupCollapsed=function(){}),"undefined"==typeof console.markTimeline&&(a.verbose("Mark timeline not available, normalizing events"),t.console.markTimeline=function(){})},consoleClear:function(){a.debug("Disabling programmatic console clearing"),t.console.clear=function(){}},requestAnimationFrame:function(){a.debug("Normalizing requestAnimationFrame"),t.requestAnimationFrame===i&&(a.debug("RequestAnimationFrame not available, normalizing event"),t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)})}},moduleExists:function(t){return e.fn[t]!==i&&e.fn[t].settings!==i},enabled:{modules:function(t){var n=[];return t=t||f.modules,e.each(t,function(e,t){a.moduleExists(t)&&n.push(t)}),n}},disabled:{modules:function(t){var n=[];return t=t||f.modules,e.each(t,function(e,t){a.moduleExists(t)||n.push(t)}),n}},change:{setting:function(t,n,o,r){o="string"==typeof o?"all"===o?f.modules:[o]:o||f.modules,r=r===i||r,e.each(o,function(i,o){var s,l=!a.moduleExists(o)||(e.fn[o].settings.namespace||!1);a.moduleExists(o)&&(a.verbose("Changing default setting",t,n,o),e.fn[o].settings[t]=n,r&&l&&(s=e(":data(module-"+l+")"),s.length>0&&(a.verbose("Modifying existing settings",s),s[o]("setting",t,n))))})},settings:function(t,n,o){n="string"==typeof n?[n]:n||f.modules,o=o===i||o,e.each(n,function(n,i){var r;a.moduleExists(i)&&(a.verbose("Changing default setting",t,i),e.extend(!0,e.fn[i].settings,t),o&&m&&(r=e(":data(module-"+m+")"),r.length>0&&(a.verbose("Modifying existing settings",r),r[i]("setting",t))))})}},enable:{console:function(){a.console(!0)},debug:function(e,t){e=e||f.modules,a.debug("Enabling debug for modules",e),a.change.setting("debug",!0,e,t)},verbose:function(e,t){e=e||f.modules,a.debug("Enabling verbose debug for modules",e),a.change.setting("verbose",!0,e,t)}},disable:{console:function(){a.console(!1)},debug:function(e,t){e=e||f.modules,a.debug("Disabling debug for modules",e),a.change.setting("debug",!1,e,t)},verbose:function(e,t){e=e||f.modules,a.debug("Disabling verbose debug for modules",e),a.change.setting("verbose",!1,e,t)}},console:function(e){if(e){if(y.cache.console===i)return void a.error(g.console);a.debug("Restoring console function"),t.console=y.cache.console}else a.debug("Disabling console function"),y.cache.console=t.console,t.console={clear:function(){},error:function(){},group:function(){},groupCollapsed:function(){},groupEnd:function(){},info:function(){},log:function(){},markTimeline:function(){},warn:function(){}}},destroy:function(){a.verbose("Destroying previous site for",v),v.removeData(p)},cache:{},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,a,t);else{if(n===i)return a[t];a[t]=n}},debug:function(){f.debug&&(f.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,f.name+":"),a.debug.apply(console,arguments)))},verbose:function(){f.verbose&&f.debug&&(f.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),a.verbose.apply(console,arguments)))},error:function(){a.error=Function.prototype.bind.call(console.error,console,f.name+":"),a.error.apply(console,arguments)},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Element:b,Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500)},display:function(){var t=f.name+":",n=0;s=!1,clearTimeout(a.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,o){var s,l,c,u=y;return n=n||d,o=b||o,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,o){var r=n!=s?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(u[r])&&n!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[o])||n==s)return u[o]!==i?(l=u[o],!1):(a.error(g.method,t),!1);u=u[o]}})),e.isFunction(l)?c=l.apply(o,n):l!==i&&(c=l),e.isArray(r)?r.push(c):r!==i?r=[r,c]:c!==i&&(r=c),l}},u?(y===i&&a.initialize(),a.invoke(c)):(y!==i&&a.destroy(),a.initialize()),r!==i?r:this},e.site.settings={name:"Site",namespace:"site",error:{console:"Console cannot be restored, most likely it was overwritten outside of module",method:"The method you called is not defined."},debug:!1,verbose:!1,performance:!0,modules:["accordion","api","checkbox","dimmer","dropdown","embed","form","modal","nag","popup","rating","shape","sidebar","state","sticky","tab","transition","visit","visibility"],siteNamespace:"site",namespaceStub:{cache:{},config:{},sections:{},section:{},utilities:{}}},e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,i){return!!e.data(t,i[3])}})}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.form=function(t){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u=arguments[1],d="string"==typeof c,f=[].slice.call(arguments,1);return a.each(function(){var m,g,p,h,v,b,y,x,C,w,k,S,T,A,R,E,P,F,O=e(this),D=this,q=[],j=!1;F={initialize:function(){F.get.settings(),d?(P===i&&F.instantiate(),F.invoke(c)):(P!==i&&P.invoke("destroy"),F.verbose("Initializing form validation",O,x),F.bindEvents(),F.set.defaults(),F.instantiate())},instantiate:function(){F.verbose("Storing instance of module",F),P=F,O.data(R,F)},destroy:function(){F.verbose("Destroying previous module",P),F.removeEvents(),O.removeData(R)},refresh:function(){F.verbose("Refreshing selector cache"),m=O.find(k.field),g=O.find(k.group),p=O.find(k.message),h=O.find(k.prompt),v=O.find(k.submit),b=O.find(k.clear),y=O.find(k.reset)},submit:function(){F.verbose("Submitting form",O),O.submit()},attachEvents:function(t,n){n=n||"submit",e(t).on("click"+E,function(e){F[n](),e.preventDefault()})},bindEvents:function(){F.verbose("Attaching form events"),O.on("submit"+E,F.validate.form).on("blur"+E,k.field,F.event.field.blur).on("click"+E,k.submit,F.submit).on("click"+E,k.reset,F.reset).on("click"+E,k.clear,F.clear),x.keyboardShortcuts&&O.on("keydown"+E,k.field,F.event.field.keydown),m.each(function(){var t=e(this),n=t.prop("type"),i=F.get.changeEvent(n,t);e(this).on(i+E,F.event.field.change)})},clear:function(){m.each(function(){var t=e(this),n=t.parent(),i=t.closest(g),o=i.find(k.prompt),a=t.data(w.defaultValue)||"",r=n.is(k.uiCheckbox),s=n.is(k.uiDropdown),l=i.hasClass(S.error);l&&(F.verbose("Resetting error on field",i),i.removeClass(S.error),o.remove()),s?(F.verbose("Resetting dropdown value",n,a),n.dropdown("clear")):r?t.prop("checked",!1):(F.verbose("Resetting field value",t,a),t.val(""))})},reset:function(){m.each(function(){var t=e(this),n=t.parent(),o=t.closest(g),a=o.find(k.prompt),r=t.data(w.defaultValue),s=n.is(k.uiCheckbox),l=n.is(k.uiDropdown),c=o.hasClass(S.error);r!==i&&(c&&(F.verbose("Resetting error on field",o),o.removeClass(S.error),a.remove()),l?(F.verbose("Resetting dropdown value",n,r),n.dropdown("restore defaults")):s?(F.verbose("Resetting checkbox value",n,r),t.prop("checked",r)):(F.verbose("Resetting field value",t,r),t.val(r)))})},is:{bracketedRule:function(e){return e.type&&e.type.match(x.regExp.bracket)},empty:function(e){return!e||0===e.length||(e.is('input[type="checkbox"]')?!e.is(":checked"):F.is.blank(e))},blank:function(t){return""===e.trim(t.val())},valid:function(){var t=!0;return F.verbose("Checking if form is valid"),e.each(C,function(e,n){F.validate.field(n,e)||(t=!1)}),t}},removeEvents:function(){O.off(E),m.off(E),v.off(E),m.off(E)},event:{field:{keydown:function(t){var n=e(this),i=t.which,o=n.is(k.input),a=n.is(k.checkbox),r=n.closest(k.uiDropdown).length>0,s={enter:13,escape:27};i==s.escape&&(F.verbose("Escape key pressed blurring field"),n.blur()),t.ctrlKey||i!=s.enter||!o||r||a||(j||(n.one("keyup"+E,F.event.field.keyup),F.submit(),F.debug("Enter pressed on input submitting form")),j=!0)},keyup:function(){j=!1},blur:function(t){var n=e(this),i=n.closest(g),o=F.get.validation(n);i.hasClass(S.error)?(F.debug("Revalidating field",n,o),o&&F.validate.field(o)):"blur"!=x.on&&"change"!=x.on||o&&F.validate.field(o)},change:function(t){var n=e(this),i=n.closest(g),o=F.get.validation(n);("change"==x.on||i.hasClass(S.error)&&x.revalidate)&&(clearTimeout(F.timer),F.timer=setTimeout(function(){F.debug("Revalidating field",n,F.get.validation(n)),F.validate.field(o)},x.delay))}}},get:{ancillaryValue:function(e){return!(!e.type||!e.value&&!F.is.bracketedRule(e))&&(e.value!==i?e.value:e.type.match(x.regExp.bracket)[1]+"")},ruleName:function(e){return F.is.bracketedRule(e)?e.type.replace(e.type.match(x.regExp.bracket)[0],""):e.type},changeEvent:function(e,t){return"checkbox"==e||"radio"==e||"hidden"==e||t.is("select")?"change":F.get.inputEvent()},inputEvent:function(){return n.createElement("input").oninput!==i?"input":n.createElement("input").onpropertychange!==i?"propertychange":"keyup"},prompt:function(e,t){var n,i,o,a=F.get.ruleName(e),r=F.get.ancillaryValue(e),s=e.prompt||x.prompt[a]||x.text.unspecifiedRule,l=s.search("{value}")!==-1,c=s.search("{name}")!==-1;return(c||l)&&(i=F.get.field(t.identifier)),l&&(s=s.replace("{value}",i.val())),c&&(n=i.closest(k.group).find("label").eq(0),o=1==n.length?n.text():i.prop("placeholder")||x.text.unspecifiedField,s=s.replace("{name}",o)),s=s.replace("{identifier}",t.identifier),s=s.replace("{ruleValue}",r),e.prompt||F.verbose("Using default validation prompt for type",s,a),s},settings:function(){if(e.isPlainObject(t)){var n,o=Object.keys(t),a=o.length>0&&(t[o[0]].identifier!==i&&t[o[0]].rules!==i);a?(x=e.extend(!0,{},e.fn.form.settings,u),C=e.extend({},e.fn.form.settings.defaults,t),F.error(x.error.oldSyntax,D),F.verbose("Extending settings from legacy parameters",C,x)):(t.fields&&(n=Object.keys(t.fields),("string"==typeof t.fields[n[0]]||e.isArray(t.fields[n[0]]))&&e.each(t.fields,function(n,i){"string"==typeof i&&(i=[i]),t.fields[n]={rules:[]},e.each(i,function(e,i){t.fields[n].rules.push({type:i})})})),x=e.extend(!0,{},e.fn.form.settings,t),C=e.extend({},e.fn.form.settings.defaults,x.fields),F.verbose("Extending settings",C,x))}else x=e.fn.form.settings,C=e.fn.form.settings.defaults,F.verbose("Using default form validation",C,x);A=x.namespace,w=x.metadata,k=x.selector,S=x.className,T=x.error,R="module-"+A,E="."+A,P=O.data(R),F.refresh()},field:function(t){return F.verbose("Finding field with identifier",t),m.filter("#"+t).length>0?m.filter("#"+t):m.filter('[name="'+t+'"]').length>0?m.filter('[name="'+t+'"]'):m.filter('[name="'+t+'[]"]').length>0?m.filter('[name="'+t+'[]"]'):m.filter("[data-"+w.validate+'="'+t+'"]').length>0?m.filter("[data-"+w.validate+'="'+t+'"]'):e("<input/>")},fields:function(t){var n=e();return e.each(t,function(e,t){n=n.add(F.get.field(t))}),n},validation:function(t){var n,i;return!!C&&(e.each(C,function(e,o){i=o.identifier||e,F.get.field(i)[0]==t[0]&&(o.identifier=i,n=o)}),n||!1)},value:function(e){var t,n=[];return n.push(e),t=F.get.values.call(D,n),t[e]},values:function(t){var n=e.isArray(t)?F.get.fields(t):m,i={};return n.each(function(t,n){var o=e(n),a=(o.prop("type"),o.prop("name")),r=o.val(),s=o.is(k.checkbox),l=o.is(k.radio),c=a.indexOf("[]")!==-1,u=!!s&&o.is(":checked");a&&(c?(a=a.replace("[]",""),i[a]||(i[a]=[]),s?u?i[a].push(r||!0):i[a].push(!1):i[a].push(r)):l?u&&(i[a]=r):s?u?i[a]=r||!0:i[a]=!1:i[a]=r)}),i}},has:{field:function(e){return F.verbose("Checking for existence of a field with identifier",e),"string"!=typeof e&&F.error(T.identifier,e),m.filter("#"+e).length>0||(m.filter('[name="'+e+'"]').length>0||m.filter("[data-"+w.validate+'="'+e+'"]').length>0)}},add:{prompt:function(t,n){var o=F.get.field(t),a=o.closest(g),r=a.children(k.prompt),s=0!==r.length;n="string"==typeof n?[n]:n,F.verbose("Adding field error state",t),a.addClass(S.error),x.inline&&(s||(r=x.templates.prompt(n),r.appendTo(a)),r.html(n[0]),s?F.verbose("Inline errors are disabled, no inline error added",t):x.transition&&e.fn.transition!==i&&O.transition("is supported")?(F.verbose("Displaying error with css transition",x.transition),r.transition(x.transition+" in",x.duration)):(F.verbose("Displaying error with fallback javascript animation"),r.fadeIn(x.duration)))},errors:function(e){F.debug("Adding form error messages",e),F.set.error(),p.html(x.templates.error(e))}},remove:{prompt:function(t){var n=F.get.field(t),o=n.closest(g),a=o.children(k.prompt);o.removeClass(S.error),x.inline&&a.is(":visible")&&(F.verbose("Removing prompt for field",t),x.transition&&e.fn.transition!==i&&O.transition("is supported")?a.transition(x.transition+" out",x.duration,function(){a.remove()}):a.fadeOut(x.duration,function(){a.remove()}))}},set:{success:function(){O.removeClass(S.error).addClass(S.success)},defaults:function(){m.each(function(){var t=e(this),n=t.filter(k.checkbox).length>0,i=n?t.is(":checked"):t.val();t.data(w.defaultValue,i)})},error:function(){O.removeClass(S.success).addClass(S.error)},value:function(e,t){var n={};return n[e]=t,F.set.values.call(D,n)},values:function(t){e.isEmptyObject(t)||e.each(t,function(t,n){var i,o=F.get.field(t),a=o.parent(),r=e.isArray(n),s=a.is(k.uiCheckbox),l=a.is(k.uiDropdown),c=o.is(k.radio)&&s,u=o.length>0;u&&(r&&s?(F.verbose("Selecting multiple",n,o),a.checkbox("uncheck"),e.each(n,function(e,t){i=o.filter('[value="'+t+'"]'),a=i.parent(),i.length>0&&a.checkbox("check")})):c?(F.verbose("Selecting radio value",n,o),o.filter('[value="'+n+'"]').parent(k.uiCheckbox).checkbox("check")):s?(F.verbose("Setting checkbox value",n,a),n===!0?a.checkbox("check"):a.checkbox("uncheck")):l?(F.verbose("Setting dropdown value",n,a),a.dropdown("set selected",n)):(F.verbose("Setting field value",n,o),o.val(n)))})}},validate:{form:function(e,t){var n=F.get.values();if(j)return!1;if(q=[],F.is.valid()){if(F.debug("Form has no validation errors, submitting"),F.set.success(),t!==!0)return x.onSuccess.call(D,e,n)}else if(F.debug("Form has errors"),F.set.error(),x.inline||F.add.errors(q),O.data("moduleApi")!==i&&e.stopImmediatePropagation(),t!==!0)return x.onFailure.call(D,q,n)},field:function(t,n){var o=t.identifier||n,a=F.get.field(o),r=!!t.depends&&F.get.field(t.depends),s=!0,l=[];return t.identifier||(F.debug("Using field name as identifier",o),t.identifier=o),a.prop("disabled")?(F.debug("Field is disabled. Skipping",o),s=!0):t.optional&&F.is.blank(a)?(F.debug("Field is optional and blank. Skipping",o),s=!0):t.depends&&F.is.empty(r)?(F.debug("Field depends on another value that is not present or empty. Skipping",r),s=!0):t.rules!==i&&e.each(t.rules,function(e,n){F.has.field(o)&&!F.validate.rule(t,n)&&(F.debug("Field is invalid",o,n.type),l.push(F.get.prompt(n,t)),s=!1)}),s?(F.remove.prompt(o,l),x.onValid.call(a),!0):(q=q.concat(l),F.add.prompt(o,l),x.onInvalid.call(a,l),!1)},rule:function(t,n){var o=F.get.field(t.identifier),a=(n.type,o.val()),r=F.get.ancillaryValue(n),s=F.get.ruleName(n),l=x.rules[s];return e.isFunction(l)?(a=a===i||""===a||null===a?"":e.trim(a+""),l.call(o,a,r)):void F.error(T.noRule,s)}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,x,t);else{if(n===i)return x[t];x[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,F,t);else{if(n===i)return F[t];F[t]=n}},debug:function(){!x.silent&&x.debug&&(x.performance?F.performance.log(arguments):(F.debug=Function.prototype.bind.call(console.info,console,x.name+":"),F.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?F.performance.log(arguments):(F.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),F.verbose.apply(console,arguments)))},error:function(){x.silent||(F.error=Function.prototype.bind.call(console.error,console,x.name+":"),F.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;x.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:D,"Execution Time":n})),clearTimeout(F.performance.timer),F.performance.timer=setTimeout(F.performance.display,500)},display:function(){var t=x.name+":",n=0;s=!1,clearTimeout(F.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=P;return n=n||f,a=D||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},F.initialize()}),o!==i?o:this},e.fn.form.settings={name:"Form",namespace:"form",debug:!1,verbose:!1,performance:!0,fields:!1,keyboardShortcuts:!0,on:"submit",inline:!1,delay:200,revalidate:!0,transition:"scale",duration:200,onValid:function(){},onInvalid:function(){},onSuccess:function(){return!0},onFailure:function(){return!1},metadata:{defaultValue:"default",validate:"validate"},regExp:{bracket:/\[(.*)\]/i,decimal:/^\d*(\.)\d+/,email:/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,flags:/^\/(.*)\/(.*)?/,integer:/^\-?\d+$/,number:/^\-?\d*(\.\d+)?$/,url:/(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i},text:{unspecifiedRule:"Please enter a valid value",unspecifiedField:"This field"},prompt:{empty:"{name} must have a value",checked:"{name} must be checked",email:"{name} must be a valid e-mail",url:"{name} must be a valid url",regExp:"{name} is not formatted correctly",integer:"{name} must be an integer",decimal:"{name} must be a decimal number",number:"{name} must be set to a number",is:'{name} must be "{ruleValue}"',isExactly:'{name} must be exactly "{ruleValue}"',not:'{name} cannot be set to "{ruleValue}"',notExactly:'{name} cannot be set to exactly "{ruleValue}"',contain:'{name} cannot contain "{ruleValue}"',containExactly:'{name} cannot contain exactly "{ruleValue}"',doesntContain:'{name} must contain  "{ruleValue}"',doesntContainExactly:'{name} must contain exactly "{ruleValue}"',minLength:"{name} must be at least {ruleValue} characters",length:"{name} must be at least {ruleValue} characters",exactLength:"{name} must be exactly {ruleValue} characters",maxLength:"{name} cannot be longer than {ruleValue} characters",match:"{name} must match {ruleValue} field",different:"{name} must have a different value than {ruleValue} field",creditCard:"{name} must be a valid credit card number",minCount:"{name} must have at least {ruleValue} choices",exactCount:"{name} must have exactly {ruleValue} choices",maxCount:"{name} must have {ruleValue} or less choices"},selector:{checkbox:'input[type="checkbox"], input[type="radio"]',clear:".clear",field:"input, textarea, select",group:".field",input:"input",message:".error.message",prompt:".prompt.label",radio:'input[type="radio"]',reset:'.reset:not([type="reset"])',submit:'.submit:not([type="submit"])',uiCheckbox:".ui.checkbox",uiDropdown:".ui.dropdown"},className:{error:"error",label:"ui prompt label",pressed:"down",success:"success"},error:{identifier:"You must specify a string identifier for each field",method:"The method you called is not defined.",noRule:"There is no rule matching the one you specified",oldSyntax:"Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically."},templates:{error:function(t){var n='<ul class="list">';return e.each(t,function(e,t){n+="<li>"+t+"</li>"}),n+="</ul>",e(n)},prompt:function(t){return e("<div/>").addClass("ui basic red pointing prompt label").html(t[0])}},rules:{empty:function(t){return!(t===i||""===t||e.isArray(t)&&0===t.length)},checked:function(){return e(this).filter(":checked").length>0},email:function(t){return e.fn.form.settings.regExp.email.test(t)},url:function(t){return e.fn.form.settings.regExp.url.test(t)},regExp:function(t,n){if(n instanceof RegExp)return t.match(n);var i,o=n.match(e.fn.form.settings.regExp.flags);return o&&(n=o.length>=2?o[1]:n,i=o.length>=3?o[2]:""),t.match(new RegExp(n,i))},integer:function(t,n){var o,a,r,s=e.fn.form.settings.regExp.integer;return n&&["",".."].indexOf(n)===-1&&(n.indexOf("..")==-1?s.test(n)&&(o=a=n-0):(r=n.split("..",2),s.test(r[0])&&(o=r[0]-0),s.test(r[1])&&(a=r[1]-0))),s.test(t)&&(o===i||t>=o)&&(a===i||t<=a)},decimal:function(t){return e.fn.form.settings.regExp.decimal.test(t)},number:function(t){return e.fn.form.settings.regExp.number.test(t)},is:function(e,t){return t="string"==typeof t?t.toLowerCase():t,e="string"==typeof e?e.toLowerCase():e,e==t},isExactly:function(e,t){return e==t},not:function(e,t){return e="string"==typeof e?e.toLowerCase():e,t="string"==typeof t?t.toLowerCase():t,e!=t},notExactly:function(e,t){return e!=t},contains:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n,"i"))!==-1},containsExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n))!==-1},doesntContain:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n,"i"))===-1},doesntContainExactly:function(t,n){return n=n.replace(e.fn.form.settings.regExp.escape,"\\$&"),t.search(new RegExp(n))===-1},minLength:function(e,t){return e!==i&&e.length>=t},length:function(e,t){return e!==i&&e.length>=t},exactLength:function(e,t){return e!==i&&e.length==t},maxLength:function(e,t){return e!==i&&e.length<=t},match:function(t,n){var o;e(this);return e('[data-validate="'+n+'"]').length>0?o=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?o=e("#"+n).val():e('[name="'+n+'"]').length>0?o=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(o=e('[name="'+n+'[]"]')),o!==i&&t.toString()==o.toString()},different:function(t,n){var o;e(this);return e('[data-validate="'+n+'"]').length>0?o=e('[data-validate="'+n+'"]').val():e("#"+n).length>0?o=e("#"+n).val():e('[name="'+n+'"]').length>0?o=e('[name="'+n+'"]').val():e('[name="'+n+'[]"]').length>0&&(o=e('[name="'+n+'[]"]')),o!==i&&t.toString()!==o.toString()},creditCard:function(t,n){var i,o,a={visa:{pattern:/^4/,length:[16]},amex:{pattern:/^3[47]/,length:[15]},mastercard:{pattern:/^5[1-5]/,length:[16]},discover:{pattern:/^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,length:[16]},unionPay:{pattern:/^(62|88)/,length:[16,17,18,19]},jcb:{pattern:/^35(2[89]|[3-8][0-9])/,length:[16]},maestro:{pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,length:[12,13,14,15,16,17,18,19]},dinersClub:{pattern:/^(30[0-5]|^36)/,length:[14]},laser:{pattern:/^(6304|670[69]|6771)/,length:[16,17,18,19]},visaElectron:{pattern:/^(4026|417500|4508|4844|491(3|7))/,length:[16]}},r={},s=!1,l="string"==typeof n&&n.split(",");if("string"==typeof t&&0!==t.length){if(l&&(e.each(l,function(n,i){o=a[i],o&&(r={length:e.inArray(t.length,o.length)!==-1,pattern:t.search(o.pattern)!==-1},r.length&&r.pattern&&(s=!0))}),!s))return!1;if(i={number:e.inArray(t.length,a.unionPay.length)!==-1,pattern:t.search(a.unionPay.pattern)!==-1},i.number&&i.pattern)return!0;for(var c=t.length,u=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],f=0;c--;)f+=d[u][parseInt(t.charAt(c),10)],u^=1;return f%10===0&&f>0}},minCount:function(e,t){return 0==t||(1==t?""!==e:e.split(",").length>=t)},exactCount:function(e,t){return 0==t?""===e:1==t?""!==e&&e.search(",")===-1:e.split(",").length==t},maxCount:function(e,t){return 0!=t&&(1==t?e.search(",")===-1:e.split(",").length<=t)}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.accordion=function(n){var o,a=e(this),r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return a.each(function(){var d,f,m=e.isPlainObject(n)?e.extend(!0,{},e.fn.accordion.settings,n):e.extend({},e.fn.accordion.settings),g=m.className,p=m.namespace,h=m.selector,v=m.error,b="."+p,y="module-"+p,x=a.selector||"",C=e(this),w=C.find(h.title),k=C.find(h.content),S=this,T=C.data(y);f={initialize:function(){f.debug("Initializing",C),f.bind.events(),m.observeChanges&&f.observeChanges(),f.instantiate()},instantiate:function(){T=f,C.data(y,f)},destroy:function(){f.debug("Destroying previous instance",C),C.off(b).removeData(y)},refresh:function(){w=C.find(h.title),k=C.find(h.content)},observeChanges:function(){"MutationObserver"in t&&(d=new MutationObserver(function(e){f.debug("DOM tree modified, updating selector cache"),f.refresh()}),d.observe(S,{childList:!0,subtree:!0}),f.debug("Setting up mutation observer",d))},bind:{events:function(){f.debug("Binding delegated events"),C.on(m.on+b,h.trigger,f.event.click)}},event:{click:function(){f.toggle.call(this)}},toggle:function(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=r&&!a,l=!r&&a;f.debug("Toggling visibility of content",n),s||l?m.collapsible?f.close.call(n):f.debug("Cannot close accordion content collapsing is disabled"):f.open.call(n)},open:function(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=r||a;return s?void f.debug("Accordion already open, skipping",o):(f.debug("Opening accordion content",n),m.onOpening.call(o),m.exclusive&&f.closeOthers.call(n),n.addClass(g.active),o.stop(!0,!0).addClass(g.animating),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?o.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):o.children().stop(!0,!0).animate({opacity:1},m.duration,f.resetOpacity)),void o.slideDown(m.duration,m.easing,function(){o.removeClass(g.animating).addClass(g.active),f.reset.display.call(this),m.onOpen.call(this),m.onChange.call(this)}))},close:function(t){var n=t!==i?"number"==typeof t?w.eq(t):e(t).closest(h.title):e(this).closest(h.title),o=n.next(k),a=o.hasClass(g.animating),r=o.hasClass(g.active),s=!r&&a,l=r&&a;!r&&!s||l||(f.debug("Closing accordion content",o),m.onClosing.call(o),n.removeClass(g.active),o.stop(!0,!0).addClass(g.animating),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?o.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):o.children().stop(!0,!0).animate({opacity:0},m.duration,f.resetOpacity)),o.slideUp(m.duration,m.easing,function(){o.removeClass(g.animating).removeClass(g.active),f.reset.display.call(this),m.onClose.call(this),m.onChange.call(this)}))},closeOthers:function(t){var n,o,a,r=t!==i?w.eq(t):e(this).closest(h.title),s=r.parents(h.content).prev(h.title),l=r.closest(h.accordion),c=h.title+"."+g.active+":visible",u=h.content+"."+g.active+":visible";m.closeNested?(n=l.find(c).not(s),a=n.next(k)):(n=l.find(c).not(s),o=l.find(u).find(c).not(s),n=n.not(o),a=n.next(k)),n.length>0&&(f.debug("Exclusive enabled, closing other content",n),n.removeClass(g.active),a.removeClass(g.animating).stop(!0,!0),m.animateChildren&&(e.fn.transition!==i&&C.transition("is supported")?a.children().transition({animation:"fade out",useFailSafe:!0,debug:m.debug,verbose:m.verbose,duration:m.duration}):a.children().stop(!0,!0).animate({opacity:0},m.duration,f.resetOpacity)),a.slideUp(m.duration,m.easing,function(){e(this).removeClass(g.active),f.reset.display.call(this)}))},reset:{display:function(){f.verbose("Removing inline display from element",this),e(this).css("display",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")},opacity:function(){f.verbose("Removing inline opacity from element",this),e(this).css("opacity",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){return f.debug("Changing internal",t,n),n===i?f[t]:void(e.isPlainObject(t)?e.extend(!0,f,t):f[t]=n)},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",x&&(t+=" '"+x+"'"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,a){var r,s,l,c=T;return n=n||u,a=S||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(v.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},c?(T===i&&f.initialize(),f.invoke(l)):(T!==i&&T.invoke("destroy"),f.initialize())}),o!==i?o:this},e.fn.accordion.settings={name:"Accordion",namespace:"accordion",silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",observeChanges:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpening:function(){},onOpen:function(){},onClosing:function(){},
onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},e.extend(e.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.checkbox=function(o){var a,r=e(this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return r.each(function(){var r,m,g=e.extend(!0,{},e.fn.checkbox.settings,o),p=g.className,h=g.namespace,v=g.selector,b=g.error,y="."+h,x="module-"+h,C=e(this),w=e(this).children(v.label),k=e(this).children(v.input),S=k[0],T=!1,A=!1,R=C.data(x),E=this;m={initialize:function(){m.verbose("Initializing checkbox",g),m.create.label(),m.bind.events(),m.set.tabbable(),m.hide.input(),m.observeChanges(),m.instantiate(),m.setup()},instantiate:function(){m.verbose("Storing instance of module",m),R=m,C.data(x,m)},destroy:function(){m.verbose("Destroying module"),m.unbind.events(),m.show.input(),C.removeData(x)},fix:{reference:function(){C.is(v.input)&&(m.debug("Behavior called on <input> adjusting invoked element"),C=C.closest(v.checkbox),m.refresh())}},setup:function(){m.set.initialLoad(),m.is.indeterminate()?(m.debug("Initial value is indeterminate"),m.indeterminate()):m.is.checked()?(m.debug("Initial value is checked"),m.check()):(m.debug("Initial value is unchecked"),m.uncheck()),m.remove.initialLoad()},refresh:function(){w=C.children(v.label),k=C.children(v.input),S=k[0]},hide:{input:function(){m.verbose("Modifying <input> z-index to be unselectable"),k.addClass(p.hidden)}},show:{input:function(){m.verbose("Modifying <input> z-index to be selectable"),k.removeClass(p.hidden)}},observeChanges:function(){"MutationObserver"in t&&(r=new MutationObserver(function(e){m.debug("DOM tree modified, updating selector cache"),m.refresh()}),r.observe(E,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",r))},attachEvents:function(t,n){var i=e(t);n=e.isFunction(m[n])?m[n]:m.toggle,i.length>0?(m.debug("Attaching checkbox events to element",t,n),i.on("click"+y,n)):m.error(b.notFound)},event:{click:function(t){var n=e(t.target);return n.is(v.input)?void m.verbose("Using default check action on initialized checkbox"):n.is(v.link)?void m.debug("Clicking link inside checkbox, skipping toggle"):(m.toggle(),k.focus(),void t.preventDefault())},keydown:function(e){var t=e.which,n={enter:13,space:32,escape:27};t==n.escape?(m.verbose("Escape key pressed blurring field"),k.blur(),A=!0):e.ctrlKey||t!=n.space&&t!=n.enter?A=!1:(m.verbose("Enter/space key pressed, toggling checkbox"),m.toggle(),A=!0)},keyup:function(e){A&&e.preventDefault()}},check:function(){m.should.allowCheck()&&(m.debug("Checking checkbox",k),m.set.checked(),m.should.ignoreCallbacks()||(g.onChecked.call(S),g.onChange.call(S)))},uncheck:function(){m.should.allowUncheck()&&(m.debug("Unchecking checkbox"),m.set.unchecked(),m.should.ignoreCallbacks()||(g.onUnchecked.call(S),g.onChange.call(S)))},indeterminate:function(){return m.should.allowIndeterminate()?void m.debug("Checkbox is already indeterminate"):(m.debug("Making checkbox indeterminate"),m.set.indeterminate(),void(m.should.ignoreCallbacks()||(g.onIndeterminate.call(S),g.onChange.call(S))))},determinate:function(){return m.should.allowDeterminate()?void m.debug("Checkbox is already determinate"):(m.debug("Making checkbox determinate"),m.set.determinate(),void(m.should.ignoreCallbacks()||(g.onDeterminate.call(S),g.onChange.call(S))))},enable:function(){return m.is.enabled()?void m.debug("Checkbox is already enabled"):(m.debug("Enabling checkbox"),m.set.enabled(),g.onEnable.call(S),void g.onEnabled.call(S))},disable:function(){return m.is.disabled()?void m.debug("Checkbox is already disabled"):(m.debug("Disabling checkbox"),m.set.disabled(),g.onDisable.call(S),void g.onDisabled.call(S))},get:{radios:function(){var t=m.get.name();return e('input[name="'+t+'"]').closest(v.checkbox)},otherRadios:function(){return m.get.radios().not(C)},name:function(){return k.attr("name")}},is:{initialLoad:function(){return T},radio:function(){return k.hasClass(p.radio)||"radio"==k.attr("type")},indeterminate:function(){return k.prop("indeterminate")!==i&&k.prop("indeterminate")},checked:function(){return k.prop("checked")!==i&&k.prop("checked")},disabled:function(){return k.prop("disabled")!==i&&k.prop("disabled")},enabled:function(){return!m.is.disabled()},determinate:function(){return!m.is.indeterminate()},unchecked:function(){return!m.is.checked()}},should:{allowCheck:function(){return m.is.determinate()&&m.is.checked()&&!m.should.forceCallbacks()?(m.debug("Should not allow check, checkbox is already checked"),!1):g.beforeChecked.apply(S)!==!1||(m.debug("Should not allow check, beforeChecked cancelled"),!1)},allowUncheck:function(){return m.is.determinate()&&m.is.unchecked()&&!m.should.forceCallbacks()?(m.debug("Should not allow uncheck, checkbox is already unchecked"),!1):g.beforeUnchecked.apply(S)!==!1||(m.debug("Should not allow uncheck, beforeUnchecked cancelled"),!1)},allowIndeterminate:function(){return m.is.indeterminate()&&!m.should.forceCallbacks()?(m.debug("Should not allow indeterminate, checkbox is already indeterminate"),!1):g.beforeIndeterminate.apply(S)!==!1||(m.debug("Should not allow indeterminate, beforeIndeterminate cancelled"),!1)},allowDeterminate:function(){return m.is.determinate()&&!m.should.forceCallbacks()?(m.debug("Should not allow determinate, checkbox is already determinate"),!1):g.beforeDeterminate.apply(S)!==!1||(m.debug("Should not allow determinate, beforeDeterminate cancelled"),!1)},forceCallbacks:function(){return m.is.initialLoad()&&g.fireOnInit},ignoreCallbacks:function(){return T&&!g.fireOnInit}},can:{change:function(){return!(C.hasClass(p.disabled)||C.hasClass(p.readOnly)||k.prop("disabled")||k.prop("readonly"))},uncheck:function(){return"boolean"==typeof g.uncheckable?g.uncheckable:!m.is.radio()}},set:{initialLoad:function(){T=!0},checked:function(){return m.verbose("Setting class to checked"),C.removeClass(p.indeterminate).addClass(p.checked),m.is.radio()&&m.uncheckOthers(),!m.is.indeterminate()&&m.is.checked()?void m.debug("Input is already checked, skipping input property change"):(m.verbose("Setting state to checked",S),k.prop("indeterminate",!1).prop("checked",!0),void m.trigger.change())},unchecked:function(){return m.verbose("Removing checked class"),C.removeClass(p.indeterminate).removeClass(p.checked),!m.is.indeterminate()&&m.is.unchecked()?void m.debug("Input is already unchecked"):(m.debug("Setting state to unchecked"),k.prop("indeterminate",!1).prop("checked",!1),void m.trigger.change())},indeterminate:function(){return m.verbose("Setting class to indeterminate"),C.addClass(p.indeterminate),m.is.indeterminate()?void m.debug("Input is already indeterminate, skipping input property change"):(m.debug("Setting state to indeterminate"),k.prop("indeterminate",!0),void m.trigger.change())},determinate:function(){return m.verbose("Removing indeterminate class"),C.removeClass(p.indeterminate),m.is.determinate()?void m.debug("Input is already determinate, skipping input property change"):(m.debug("Setting state to determinate"),void k.prop("indeterminate",!1))},disabled:function(){return m.verbose("Setting class to disabled"),C.addClass(p.disabled),m.is.disabled()?void m.debug("Input is already disabled, skipping input property change"):(m.debug("Setting state to disabled"),k.prop("disabled","disabled"),void m.trigger.change())},enabled:function(){return m.verbose("Removing disabled class"),C.removeClass(p.disabled),m.is.enabled()?void m.debug("Input is already enabled, skipping input property change"):(m.debug("Setting state to enabled"),k.prop("disabled",!1),void m.trigger.change())},tabbable:function(){m.verbose("Adding tabindex to checkbox"),k.attr("tabindex")===i&&k.attr("tabindex",0)}},remove:{initialLoad:function(){T=!1}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=k[0];t&&(m.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},create:{label:function(){k.prevAll(v.label).length>0?(k.prev(v.label).detach().insertAfter(k),m.debug("Moving existing label",w)):m.has.label()||(w=e("<label>").insertAfter(k),m.debug("Creating label",w))}},has:{label:function(){return w.length>0}},bind:{events:function(){m.verbose("Attaching checkbox events"),C.on("click"+y,m.event.click).on("keydown"+y,v.input,m.event.keydown).on("keyup"+y,v.input,m.event.keyup)}},unbind:{events:function(){m.debug("Removing events"),C.off(y)}},uncheckOthers:function(){var e=m.get.otherRadios();m.debug("Unchecking other radios",e),e.removeClass(p.checked)},toggle:function(){return m.can.change()?void(m.is.indeterminate()||m.is.unchecked()?(m.debug("Currently unchecked"),m.check()):m.is.checked()&&m.can.uncheck()&&(m.debug("Currently checked"),m.uncheck())):void(m.is.radio()||m.debug("Checkbox is read-only or disabled, ignoring toggle"))},setting:function(t,n){if(m.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];e.isPlainObject(g[t])?e.extend(!0,g[t],n):g[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:E,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=g.name+":",n=0;l=!1,clearTimeout(m.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=R;return n=n||f,o=E||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(m.error(b.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(R===i&&m.initialize(),m.invoke(u)):(R!==i&&R.invoke("destroy"),m.initialize())}),a!==i?a:this},e.fn.checkbox.settings={name:"Checkbox",namespace:"checkbox",silent:!1,debug:!1,verbose:!0,performance:!0,uncheckable:"auto",fireOnInit:!1,onChange:function(){},beforeChecked:function(){},beforeUnchecked:function(){},beforeDeterminate:function(){},beforeIndeterminate:function(){},onChecked:function(){},onUnchecked:function(){},onDeterminate:function(){},onIndeterminate:function(){},onEnable:function(){},onDisable:function(){},onEnabled:function(){},onDisabled:function(){},className:{checked:"checked",indeterminate:"indeterminate",disabled:"disabled",hidden:"hidden",radio:"radio",readOnly:"read-only"},error:{method:"The method you called is not defined"},selector:{checkbox:".ui.checkbox",label:"label, .box",input:'input[type="checkbox"], input[type="radio"]',link:"a[href]"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dimmer=function(t){var o,a=e(this),r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return a.each(function(){var d,f,m,g=e.isPlainObject(t)?e.extend(!0,{},e.fn.dimmer.settings,t):e.extend({},e.fn.dimmer.settings),p=g.selector,h=g.namespace,v=g.className,b=g.error,y="."+h,x="module-"+h,C=a.selector||"",w="ontouchstart"in n.documentElement?"touchstart":"click",k=e(this),S=this,T=k.data(x);m={preinitialize:function(){m.is.dimmer()?(f=k.parent(),d=k):(f=k,d=m.has.dimmer()?g.dimmerName?f.find(p.dimmer).filter("."+g.dimmerName):f.find(p.dimmer):m.create(),m.set.variation())},initialize:function(){m.debug("Initializing dimmer",g),m.bind.events(),m.set.dimmable(),m.instantiate()},instantiate:function(){m.verbose("Storing instance of module",m),T=m,k.data(x,T)},destroy:function(){m.verbose("Destroying previous module",d),m.unbind.events(),m.remove.variation(),f.off(y)},bind:{events:function(){"hover"==g.on?f.on("mouseenter"+y,m.show).on("mouseleave"+y,m.hide):"click"==g.on&&f.on(w+y,m.toggle),m.is.page()&&(m.debug("Setting as a page dimmer",f),m.set.pageDimmer()),m.is.closable()&&(m.verbose("Adding dimmer close event",d),f.on(w+y,p.dimmer,m.event.click))}},unbind:{events:function(){k.removeData(x),f.off(y)}},event:{click:function(t){m.verbose("Determining if event occured on dimmer",t),(0===d.find(t.target).length||e(t.target).is(p.content))&&(m.hide(),t.stopImmediatePropagation())}},addContent:function(t){var n=e(t);m.debug("Add content to dimmer",n),n.parent()[0]!==d[0]&&n.detach().appendTo(d)},create:function(){var t=e(g.template.dimmer());return g.dimmerName&&(m.debug("Creating named dimmer",g.dimmerName),t.addClass(g.dimmerName)),t.appendTo(f),t},show:function(t){t=e.isFunction(t)?t:function(){},m.debug("Showing dimmer",d,g),m.is.dimmed()&&!m.is.animating()||!m.is.enabled()?m.debug("Dimmer is already shown or disabled"):(m.animate.show(t),g.onShow.call(S),g.onChange.call(S))},hide:function(t){t=e.isFunction(t)?t:function(){},m.is.dimmed()||m.is.animating()?(m.debug("Hiding dimmer",d),m.animate.hide(t),g.onHide.call(S),g.onChange.call(S)):m.debug("Dimmer is not visible")},toggle:function(){m.verbose("Toggling dimmer visibility",d),m.is.dimmed()?m.hide():m.show()},animate:{show:function(t){t=e.isFunction(t)?t:function(){},g.useCSS&&e.fn.transition!==i&&d.transition("is supported")?("auto"!==g.opacity&&m.set.opacity(),d.transition({animation:g.transition+" in",queue:!1,duration:m.get.duration(),useFailSafe:!0,onStart:function(){m.set.dimmed()},onComplete:function(){m.set.active(),t()}})):(m.verbose("Showing dimmer animation with javascript"),m.set.dimmed(),"auto"==g.opacity&&(g.opacity=.8),d.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(m.get.duration(),g.opacity,function(){d.removeAttr("style"),m.set.active(),t()}))},hide:function(t){t=e.isFunction(t)?t:function(){},g.useCSS&&e.fn.transition!==i&&d.transition("is supported")?(m.verbose("Hiding dimmer with css"),d.transition({animation:g.transition+" out",queue:!1,duration:m.get.duration(),useFailSafe:!0,onStart:function(){m.remove.dimmed()},onComplete:function(){m.remove.active(),t()}})):(m.verbose("Hiding dimmer with javascript"),m.remove.dimmed(),d.stop().fadeOut(m.get.duration(),function(){m.remove.active(),d.removeAttr("style"),t()}))}},get:{dimmer:function(){return d},duration:function(){return"object"==typeof g.duration?m.is.active()?g.duration.hide:g.duration.show:g.duration}},has:{dimmer:function(){return g.dimmerName?k.find(p.dimmer).filter("."+g.dimmerName).length>0:k.find(p.dimmer).length>0}},is:{active:function(){return d.hasClass(v.active)},animating:function(){return d.is(":animated")||d.hasClass(v.animating)},closable:function(){return"auto"==g.closable?"hover"!=g.on:g.closable},dimmer:function(){return k.hasClass(v.dimmer)},dimmable:function(){return k.hasClass(v.dimmable)},dimmed:function(){return f.hasClass(v.dimmed)},disabled:function(){return f.hasClass(v.disabled)},enabled:function(){return!m.is.disabled()},page:function(){return f.is("body")},pageDimmer:function(){return d.hasClass(v.pageDimmer)}},can:{show:function(){return!d.hasClass(v.disabled)}},set:{opacity:function(e){var t=d.css("background-color"),n=t.split(","),i=n&&3==n.length,o=n&&4==n.length;e=0===g.opacity?0:g.opacity||e,i||o?(n[3]=e+")",t=n.join(",")):t="rgba(0, 0, 0, "+e+")",m.debug("Setting opacity to",e),d.css("background-color",t)},active:function(){d.addClass(v.active)},dimmable:function(){f.addClass(v.dimmable)},dimmed:function(){f.addClass(v.dimmed)},pageDimmer:function(){d.addClass(v.pageDimmer)},disabled:function(){d.addClass(v.disabled)},variation:function(e){e=e||g.variation,e&&d.addClass(e)}},remove:{active:function(){d.removeClass(v.active)},dimmed:function(){f.removeClass(v.dimmed)},disabled:function(){d.removeClass(v.disabled)},variation:function(e){e=e||g.variation,e&&d.removeClass(e)}},setting:function(t,n){if(m.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];e.isPlainObject(g[t])?e.extend(!0,g[t],n):g[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:S,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=g.name+":",n=0;r=!1,clearTimeout(m.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",C&&(t+=" '"+C+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,n,a){var r,s,l,c=T;return n=n||u,a=S||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(m.error(b.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},m.preinitialize(),c?(T===i&&m.initialize(),m.invoke(l)):(T!==i&&T.invoke("destroy"),m.initialize())}),o!==i?o:this},e.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",silent:!1,debug:!1,verbose:!1,performance:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",dimmer:"dimmer",disabled:"disabled",hide:"hide",pageDimmer:"page",show:"show"},selector:{dimmer:"> .ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(){return e("<div />").attr("class","ui dimmer")}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.dropdown=function(o){var a,r=e(this),s=e(n),l=r.selector||"",c="ontouchstart"in n.documentElement,u=(new Date).getTime(),d=[],f=arguments[0],m="string"==typeof f,g=[].slice.call(arguments,1);return r.each(function(p){var h,v,b,y,x,C,w,k,S=e.isPlainObject(o)?e.extend(!0,{},e.fn.dropdown.settings,o):e.extend({},e.fn.dropdown.settings),T=S.className,A=S.message,R=S.fields,E=S.keys,P=S.metadata,F=S.namespace,O=S.regExp,D=S.selector,q=S.error,j=S.templates,z="."+F,M="module-"+F,I=e(this),L=e(S.context),N=I.find(D.text),V=I.find(D.search),H=I.find(D.sizer),U=I.find(D.input),W=I.find(D.icon),B=I.prev().find(D.text).length>0?I.prev().find(D.text):I.prev(),Q=I.children(D.menu),X=Q.find(D.item),$=!1,Y=!1,K=!1,Z=this,J=I.data(M);k={initialize:function(){k.debug("Initializing dropdown",S),k.is.alreadySetup()?k.setup.reference():(k.setup.layout(),k.refreshData(),k.save.defaults(),k.restore.selected(),k.create.id(),k.bind.events(),k.observeChanges(),k.instantiate())},instantiate:function(){k.verbose("Storing instance of dropdown",k),J=k,I.data(M,k)},destroy:function(){k.verbose("Destroying previous dropdown",I),k.remove.tabbable(),I.off(z).removeData(M),Q.off(z),s.off(y),k.disconnect.menuObserver(),k.disconnect.selectObserver()},observeChanges:function(){"MutationObserver"in t&&(C=new MutationObserver(k.event.select.mutation),w=new MutationObserver(k.event.menu.mutation),k.debug("Setting up mutation observer",C,w),k.observe.select(),k.observe.menu())},disconnect:{menuObserver:function(){w&&w.disconnect()},selectObserver:function(){C&&C.disconnect()}},observe:{select:function(){k.has.input()&&C.observe(U[0],{childList:!0,subtree:!0})},menu:function(){k.has.menu()&&w.observe(Q[0],{childList:!0,subtree:!0})}},create:{id:function(){x=(Math.random().toString(16)+"000000000").substr(2,8),y="."+x,k.verbose("Creating unique id for element",x)},userChoice:function(t){var n,o,a;return!!(t=t||k.get.userValues())&&(t=e.isArray(t)?t:[t],e.each(t,function(t,r){k.get.item(r)===!1&&(a=S.templates.addition(k.add.variables(A.addResult,r)),o=e("<div />").html(a).attr("data-"+P.value,r).attr("data-"+P.text,r).addClass(T.addition).addClass(T.item),S.hideAdditions&&o.addClass(T.hidden),n=n===i?o:n.add(o),k.verbose("Creating user choices for value",r,o))}),n)},userLabels:function(t){var n=k.get.userValues();n&&(k.debug("Adding user labels",n),e.each(n,function(e,t){k.verbose("Adding custom user value"),k.add.label(t,t)}))},menu:function(){Q=e("<div />").addClass(T.menu).appendTo(I)},sizer:function(){H=e("<span />").addClass(T.sizer).insertAfter(V)}},search:function(e){e=e!==i?e:k.get.query(),k.verbose("Searching for query",e),k.has.minCharacters(e)?k.filter(e):k.hide()},select:{firstUnfiltered:function(){k.verbose("Selecting first non-filtered element"),k.remove.selectedItem(),X.not(D.unselectable).not(D.addition+D.hidden).eq(0).addClass(T.selected)},nextAvailable:function(e){e=e.eq(0);var t=e.nextAll(D.item).not(D.unselectable).eq(0),n=e.prevAll(D.item).not(D.unselectable).eq(0),i=t.length>0;i?(k.verbose("Moving selection to",t),t.addClass(T.selected)):(k.verbose("Moving selection to",n),n.addClass(T.selected))}},setup:{api:function(){var e={debug:S.debug,urlData:{value:k.get.value(),query:k.get.query()},on:!1};k.verbose("First request, initializing API"),I.api(e)},layout:function(){I.is("select")&&(k.setup.select(),k.setup.returnedObject()),k.has.menu()||k.create.menu(),k.is.search()&&!k.has.search()&&(k.verbose("Adding search input"),V=e("<input />").addClass(T.search).prop("autocomplete","off").insertBefore(N)),k.is.multiple()&&k.is.searchSelection()&&!k.has.sizer()&&k.create.sizer(),S.allowTab&&k.set.tabbable()},select:function(){var t=k.get.selectValues();k.debug("Dropdown initialized on a select",t),I.is("select")&&(U=I),U.parent(D.dropdown).length>0?(k.debug("UI dropdown already exists. Creating dropdown menu only"),I=U.closest(D.dropdown),k.has.menu()||k.create.menu(),Q=I.children(D.menu),k.setup.menu(t)):(k.debug("Creating entire dropdown from select"),I=e("<div />").attr("class",U.attr("class")).addClass(T.selection).addClass(T.dropdown).html(j.dropdown(t)).insertBefore(U),U.hasClass(T.multiple)&&U.prop("multiple")===!1&&(k.error(q.missingMultiple),U.prop("multiple",!0)),U.is("[multiple]")&&k.set.multiple(),U.prop("disabled")&&(k.debug("Disabling dropdown"),I.addClass(T.disabled)),U.removeAttr("class").detach().prependTo(I)),k.refresh()},menu:function(e){Q.html(j.menu(e,R)),X=Q.find(D.item)},reference:function(){k.debug("Dropdown behavior was called on select, replacing with closest dropdown"),I=I.parent(D.dropdown),k.refresh(),k.setup.returnedObject(),m&&(J=k,k.invoke(f))},returnedObject:function(){var e=r.slice(0,p),t=r.slice(p+1);r=e.add(I).add(t)}},refresh:function(){k.refreshSelectors(),k.refreshData()},refreshItems:function(){X=Q.find(D.item)},refreshSelectors:function(){k.verbose("Refreshing selector cache"),N=I.find(D.text),V=I.find(D.search),U=I.find(D.input),W=I.find(D.icon),B=I.prev().find(D.text).length>0?I.prev().find(D.text):I.prev(),Q=I.children(D.menu),X=Q.find(D.item)},refreshData:function(){k.verbose("Refreshing cached metadata"),X.removeData(P.text).removeData(P.value)},clearData:function(){k.verbose("Clearing metadata"),X.removeData(P.text).removeData(P.value),I.removeData(P.defaultText).removeData(P.defaultValue).removeData(P.placeholderText)},toggle:function(){k.verbose("Toggling menu visibility"),k.is.active()?k.hide():k.show()},show:function(t){if(t=e.isFunction(t)?t:function(){},k.can.show()&&!k.is.active()){if(k.debug("Showing dropdown"),!k.has.message()||k.has.maxSelections()||k.has.allResultsFiltered()||k.remove.message(),k.is.allFiltered())return!0;S.onShow.call(Z)!==!1&&k.animate.show(function(){k.can.click()&&k.bind.intent(),k.has.menuSearch()&&k.focusSearch(),k.set.visible(),t.call(Z)})}},hide:function(t){t=e.isFunction(t)?t:function(){},k.is.active()&&(k.debug("Hiding dropdown"),S.onHide.call(Z)!==!1&&k.animate.hide(function(){k.remove.visible(),t.call(Z)}))},hideOthers:function(){k.verbose("Finding other dropdowns to hide"),r.not(I).has(D.menu+"."+T.visible).dropdown("hide")},hideMenu:function(){k.verbose("Hiding menu  instantaneously"),k.remove.active(),k.remove.visible(),Q.transition("hide")},hideSubMenus:function(){var e=Q.children(D.item).find(D.menu);k.verbose("Hiding sub menus",e),e.transition("hide")},bind:{events:function(){c&&k.bind.touchEvents(),k.bind.keyboardEvents(),k.bind.inputEvents(),k.bind.mouseEvents()},touchEvents:function(){k.debug("Touch device detected binding additional touch events"),k.is.searchSelection()||k.is.single()&&I.on("touchstart"+z,k.event.test.toggle),Q.on("touchstart"+z,D.item,k.event.item.mouseenter)},keyboardEvents:function(){k.verbose("Binding keyboard events"),I.on("keydown"+z,k.event.keydown),k.has.search()&&I.on(k.get.inputEvent()+z,D.search,k.event.input),k.is.multiple()&&s.on("keydown"+y,k.event.document.keydown)},inputEvents:function(){k.verbose("Binding input change events"),I.on("change"+z,D.input,k.event.change)},mouseEvents:function(){k.verbose("Binding mouse events"),k.is.multiple()&&I.on("click"+z,D.label,k.event.label.click).on("click"+z,D.remove,k.event.remove.click),k.is.searchSelection()?(I.on("mousedown"+z,k.event.mousedown).on("mouseup"+z,k.event.mouseup).on("mousedown"+z,D.menu,k.event.menu.mousedown).on("mouseup"+z,D.menu,k.event.menu.mouseup).on("click"+z,D.icon,k.event.icon.click).on("focus"+z,D.search,k.event.search.focus).on("click"+z,D.search,k.event.search.focus).on("blur"+z,D.search,k.event.search.blur).on("click"+z,D.text,k.event.text.focus),k.is.multiple()&&I.on("click"+z,k.event.click)):("click"==S.on?I.on("click"+z,D.icon,k.event.icon.click).on("click"+z,k.event.test.toggle):"hover"==S.on?I.on("mouseenter"+z,k.delay.show).on("mouseleave"+z,k.delay.hide):I.on(S.on+z,k.toggle),I.on("mousedown"+z,k.event.mousedown).on("mouseup"+z,k.event.mouseup).on("focus"+z,k.event.focus).on("blur"+z,k.event.blur)),Q.on("mouseenter"+z,D.item,k.event.item.mouseenter).on("mouseleave"+z,D.item,k.event.item.mouseleave).on("click"+z,D.item,k.event.item.click)},intent:function(){k.verbose("Binding hide intent event to document"),c&&s.on("touchstart"+y,k.event.test.touch).on("touchmove"+y,k.event.test.touch),s.on("click"+y,k.event.test.hide)}},unbind:{intent:function(){k.verbose("Removing hide intent event from document"),c&&s.off("touchstart"+y).off("touchmove"+y),s.off("click"+y)}},filter:function(e){var t=e!==i?e:k.get.query(),n=function(){k.is.multiple()&&k.filterActive(),k.select.firstUnfiltered(),k.has.allResultsFiltered()?S.onNoResults.call(Z,t)?S.allowAdditions?S.hideAdditions&&(k.verbose("User addition with no menu, setting empty style"),k.set.empty(),k.hideMenu()):(k.verbose("All items filtered, showing message",t),k.add.message(A.noResults)):(k.verbose("All items filtered, hiding dropdown",t),k.hideMenu()):(k.remove.empty(),k.remove.message()),S.allowAdditions&&k.add.userSuggestion(e),k.is.searchSelection()&&k.can.show()&&k.is.focusedOnSearch()&&k.show()};S.useLabels&&k.has.maxSelections()||(S.apiSettings?k.can.useAPI()?k.queryRemote(t,function(){n()}):k.error(q.noAPI):(k.filterItems(t),n()))},queryRemote:function(t,n){var i={errorDuration:!1,cache:"local",throttle:S.throttle,urlData:{query:t},onError:function(){k.add.message(A.serverError),n()},onFailure:function(){k.add.message(A.serverError),n()},onSuccess:function(e){k.remove.message(),k.setup.menu({values:e[R.remoteValues]}),n()}};I.api("get request")||k.setup.api(),i=e.extend(!0,{},i,S.apiSettings),I.api("setting",i).api("query")},filterItems:function(t){var n=t!==i?t:k.get.query(),o=null,a=k.escape.regExp(n),r=new RegExp("^"+a,"igm");k.has.query()&&(o=[],k.verbose("Searching for matching values",n),X.each(function(){var t,i,a=e(this);if("both"==S.match||"text"==S.match){if(t=String(k.get.choiceText(a,!1)),t.search(r)!==-1)return o.push(this),!0;if("exact"===S.fullTextSearch&&k.exactSearch(n,t))return o.push(this),!0;if(S.fullTextSearch===!0&&k.fuzzySearch(n,t))return o.push(this),!0}if("both"==S.match||"value"==S.match){if(i=String(k.get.choiceValue(a,t)),i.search(r)!==-1)return o.push(this),!0;if(S.fullTextSearch&&k.fuzzySearch(n,i))return o.push(this),!0}})),k.debug("Showing only matched items",n),k.remove.filteredItem(),o&&X.not(o).addClass(T.filtered)},fuzzySearch:function(e,t){var n=t.length,i=e.length;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},exactSearch:function(e,t){return e=e.toLowerCase(),t=t.toLowerCase(),t.indexOf(e)>-1},filterActive:function(){S.useLabels&&X.filter("."+T.active).addClass(T.filtered)},focusSearch:function(e){k.has.search()&&!k.is.focusedOnSearch()&&(e?(I.off("focus"+z,D.search),V.focus(),I.on("focus"+z,D.search,k.event.search.focus)):V.focus())},forceSelection:function(){var e=X.not(T.filtered).filter("."+T.selected).eq(0),t=X.not(T.filtered).filter("."+T.active).eq(0),n=e.length>0?e:t,i=n.length>0;return i?(k.debug("Forcing partial selection to selected item",n),void k.event.item.click.call(n,{},!0)):void(S.allowAdditions?(k.set.selected(k.get.query()),k.remove.searchTerm()):k.remove.searchTerm())},event:{change:function(){K||(k.debug("Input changed, updating selection"),k.set.selected())},focus:function(){S.showOnFocus&&!$&&k.is.hidden()&&!v&&k.show()},blur:function(e){v=n.activeElement===this,$||v||(k.remove.activeLabel(),k.hide())},mousedown:function(){k.is.searchSelection()?b=!0:$=!0},mouseup:function(){k.is.searchSelection()?b=!1:$=!1},click:function(t){var n=e(t.target);n.is(I)&&(k.is.focusedOnSearch()?k.show():k.focusSearch())},search:{focus:function(){$=!0,k.is.multiple()&&k.remove.activeLabel(),S.showOnFocus&&k.search()},blur:function(e){v=n.activeElement===this,b||Y||v||(S.forceSelection&&k.forceSelection(),k.hide()),b=!1}},icon:{click:function(e){k.toggle()}},text:{focus:function(e){$=!0,k.focusSearch()}},input:function(e){(k.is.multiple()||k.is.searchSelection())&&k.set.filtered(),clearTimeout(k.timer),k.timer=setTimeout(k.search,S.delay.search);
},label:{click:function(t){var n=e(this),i=I.find(D.label),o=i.filter("."+T.active),a=n.nextAll("."+T.active),r=n.prevAll("."+T.active),s=a.length>0?n.nextUntil(a).add(o).add(n):n.prevUntil(r).add(o).add(n);t.shiftKey?(o.removeClass(T.active),s.addClass(T.active)):t.ctrlKey?n.toggleClass(T.active):(o.removeClass(T.active),n.addClass(T.active)),S.onLabelSelect.apply(this,i.filter("."+T.active))}},remove:{click:function(){var t=e(this).parent();t.hasClass(T.active)?k.remove.activeLabels():k.remove.activeLabels(t)}},test:{toggle:function(e){var t=k.is.multiple()?k.show:k.toggle;k.is.bubbledLabelClick(e)||k.is.bubbledIconClick(e)||k.determine.eventOnElement(e,t)&&e.preventDefault()},touch:function(e){k.determine.eventOnElement(e,function(){"touchstart"==e.type?k.timer=setTimeout(function(){k.hide()},S.delay.touch):"touchmove"==e.type&&clearTimeout(k.timer)}),e.stopPropagation()},hide:function(e){k.determine.eventInModule(e,k.hide)}},select:{mutation:function(e){k.debug("<select> modified, recreating menu"),k.setup.select()}},menu:{mutation:function(t){var n=t[0],i=e(n.addedNodes?n.addedNodes[0]:!1),o=e(n.removedNodes?n.removedNodes[0]:!1),a=i.add(o),r=a.is(D.addition)||a.closest(D.addition).length>0,s=a.is(D.message)||a.closest(D.message).length>0;r||s?(k.debug("Updating item selector cache"),k.refreshItems()):(k.debug("Menu modified, updating selector cache"),k.refresh())},mousedown:function(){Y=!0},mouseup:function(){Y=!1}},item:{mouseenter:function(t){var n=e(t.target),i=e(this),o=i.children(D.menu),a=i.siblings(D.item).children(D.menu),r=o.length>0,s=o.find(n).length>0;!s&&r&&(clearTimeout(k.itemTimer),k.itemTimer=setTimeout(function(){k.verbose("Showing sub-menu",o),e.each(a,function(){k.animate.hide(!1,e(this))}),k.animate.show(!1,o)},S.delay.show),t.preventDefault())},mouseleave:function(t){var n=e(this).children(D.menu);n.length>0&&(clearTimeout(k.itemTimer),k.itemTimer=setTimeout(function(){k.verbose("Hiding sub-menu",n),k.animate.hide(!1,n)},S.delay.hide))},click:function(t,n){var i=e(this),o=e(t?t.target:""),a=i.find(D.menu),r=k.get.choiceText(i),s=k.get.choiceValue(i,r),l=a.length>0,c=a.find(o).length>0;c||l&&!S.allowCategorySelection||(k.is.searchSelection()&&(S.allowAdditions&&k.remove.userAddition(),k.remove.searchTerm(),k.is.focusedOnSearch()||1==n||k.focusSearch(!0)),S.useLabels||(k.remove.filteredItem(),k.set.scrollPosition(i)),k.determine.selectAction.call(this,r,s))}},document:{keydown:function(e){var t=e.which,n=k.is.inObject(t,E);if(n){var i=I.find(D.label),o=i.filter("."+T.active),a=(o.data(P.value),i.index(o)),r=i.length,s=o.length>0,l=o.length>1,c=0===a,u=a+1==r,d=k.is.searchSelection(),f=k.is.focusedOnSearch(),m=k.is.focused(),g=f&&0===k.get.caretPosition();if(d&&!s&&!f)return;t==E.leftArrow?!m&&!g||s?s&&(e.shiftKey?k.verbose("Adding previous label to selection"):(k.verbose("Selecting previous label"),i.removeClass(T.active)),c&&!l?o.addClass(T.active):o.prev(D.siblingLabel).addClass(T.active).end(),e.preventDefault()):(k.verbose("Selecting previous label"),i.last().addClass(T.active)):t==E.rightArrow?(m&&!s&&i.first().addClass(T.active),s&&(e.shiftKey?k.verbose("Adding next label to selection"):(k.verbose("Selecting next label"),i.removeClass(T.active)),u?d?f?i.removeClass(T.active):k.focusSearch():l?o.next(D.siblingLabel).addClass(T.active):o.addClass(T.active):o.next(D.siblingLabel).addClass(T.active),e.preventDefault())):t==E.deleteKey||t==E.backspace?s?(k.verbose("Removing active labels"),u&&d&&!f&&k.focusSearch(),o.last().next(D.siblingLabel).addClass(T.active),k.remove.activeLabels(o),e.preventDefault()):g&&!s&&t==E.backspace&&(k.verbose("Removing last label on input backspace"),o=i.last().addClass(T.active),k.remove.activeLabels(o)):o.removeClass(T.active)}}},keydown:function(e){var t=e.which,n=k.is.inObject(t,E);if(n){var i,o,a=X.not(D.unselectable).filter("."+T.selected).eq(0),r=Q.children("."+T.active).eq(0),s=a.length>0?a:r,l=s.length>0?s.siblings(":not(."+T.filtered+")").addBack():Q.children(":not(."+T.filtered+")"),c=s.children(D.menu),u=s.closest(D.menu),d=u.hasClass(T.visible)||u.hasClass(T.animating)||u.parent(D.menu).length>0,f=c.length>0,m=s.length>0,g=s.not(D.unselectable).length>0,p=t==E.delimiter&&S.allowAdditions&&k.is.multiple(),h=S.allowAdditions&&S.hideAdditions&&(t==E.enter||p)&&g;if(h&&(k.verbose("Selecting item from keyboard shortcut",s),k.event.item.click.call(s,e),k.is.searchSelection()&&k.remove.searchTerm()),k.is.visible()){if((t==E.enter||p)&&(t==E.enter&&m&&f&&!S.allowCategorySelection?(k.verbose("Pressed enter on unselectable category, opening sub menu"),t=E.rightArrow):g&&(k.verbose("Selecting item from keyboard shortcut",s),k.event.item.click.call(s,e),k.is.searchSelection()&&k.remove.searchTerm()),e.preventDefault()),m&&(t==E.leftArrow&&(o=u[0]!==Q[0],o&&(k.verbose("Left key pressed, closing sub-menu"),k.animate.hide(!1,u),s.removeClass(T.selected),u.closest(D.item).addClass(T.selected),e.preventDefault())),t==E.rightArrow&&f&&(k.verbose("Right key pressed, opening sub-menu"),k.animate.show(!1,c),s.removeClass(T.selected),c.find(D.item).eq(0).addClass(T.selected),e.preventDefault())),t==E.upArrow){if(i=m&&d?s.prevAll(D.item+":not("+D.unselectable+")").eq(0):X.eq(0),l.index(i)<0)return k.verbose("Up key pressed but reached top of current menu"),void e.preventDefault();k.verbose("Up key pressed, changing active item"),s.removeClass(T.selected),i.addClass(T.selected),k.set.scrollPosition(i),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),e.preventDefault()}if(t==E.downArrow){if(i=m&&d?i=s.nextAll(D.item+":not("+D.unselectable+")").eq(0):X.eq(0),0===i.length)return k.verbose("Down key pressed but reached bottom of current menu"),void e.preventDefault();k.verbose("Down key pressed, changing active item"),X.removeClass(T.selected),i.addClass(T.selected),k.set.scrollPosition(i),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),e.preventDefault()}t==E.pageUp&&(k.scrollPage("up"),e.preventDefault()),t==E.pageDown&&(k.scrollPage("down"),e.preventDefault()),t==E.escape&&(k.verbose("Escape key pressed, closing dropdown"),k.hide())}else p&&e.preventDefault(),t!=E.downArrow||k.is.visible()||(k.verbose("Down key pressed, showing dropdown"),k.select.firstUnfiltered(),k.show(),e.preventDefault())}else k.has.search()||k.set.selectedLetter(String.fromCharCode(t))}},trigger:{change:function(){var e=n.createEvent("HTMLEvents"),t=U[0];t&&(k.verbose("Triggering native change event"),e.initEvent("change",!0,!1),t.dispatchEvent(e))}},determine:{selectAction:function(t,n){k.verbose("Determining action",S.action),e.isFunction(k.action[S.action])?(k.verbose("Triggering preset action",S.action,t,n),k.action[S.action].call(Z,t,n,this)):e.isFunction(S.action)?(k.verbose("Triggering user action",S.action,t,n),S.action.call(Z,t,n,this)):k.error(q.action,S.action)},eventInModule:function(t,i){var o=e(t.target),a=o.closest(n.documentElement).length>0,r=o.closest(I).length>0;return i=e.isFunction(i)?i:function(){},a&&!r?(k.verbose("Triggering event",i),i(),!0):(k.verbose("Event occurred in dropdown, canceling callback"),!1)},eventOnElement:function(t,i){var o=e(t.target),a=o.closest(D.siblingLabel),r=n.body.contains(t.target),s=0===I.find(a).length,l=0===o.closest(Q).length;return i=e.isFunction(i)?i:function(){},r&&s&&l?(k.verbose("Triggering event",i),i(),!0):(k.verbose("Event occurred in dropdown menu, canceling callback"),!1)}},action:{nothing:function(){},activate:function(t,n,o){if(n=n!==i?n:t,k.can.activate(e(o))){if(k.set.selected(n,e(o)),k.is.multiple()&&!k.is.allFiltered())return;k.hideAndClear()}},select:function(t,n,o){if(n=n!==i?n:t,k.can.activate(e(o))){if(k.set.value(n,e(o)),k.is.multiple()&&!k.is.allFiltered())return;k.hideAndClear()}},combo:function(t,n,o){n=n!==i?n:t,k.set.selected(n,e(o)),k.hideAndClear()},hide:function(e,t,n){k.set.value(t,e),k.hideAndClear()}},get:{id:function(){return x},defaultText:function(){return I.data(P.defaultText)},defaultValue:function(){return I.data(P.defaultValue)},placeholderText:function(){return I.data(P.placeholderText)||""},text:function(){return N.text()},query:function(){return e.trim(V.val())},searchWidth:function(e){return e=e!==i?e:V.val(),H.text(e),Math.ceil(H.width()+1)},selectionCount:function(){var t,n=k.get.values();return t=k.is.multiple()?e.isArray(n)?n.length:0:""!==k.get.value()?1:0},transition:function(e){return"auto"==S.transition?k.is.upward(e)?"slide up":"slide down":S.transition},userValues:function(){var t=k.get.values();return!!t&&(t=e.isArray(t)?t:[t],e.grep(t,function(e){return k.get.item(e)===!1}))},uniqueArray:function(t){return e.grep(t,function(n,i){return e.inArray(n,t)===i})},caretPosition:function(){var e,t,i=V.get(0);return"selectionStart"in i?i.selectionStart:n.selection?(i.focus(),e=n.selection.createRange(),t=e.text.length,e.moveStart("character",-i.value.length),e.text.length-t):void 0},value:function(){var t=U.length>0?U.val():I.data(P.value),n=e.isArray(t)&&1===t.length&&""===t[0];return t===i||n?"":t},values:function(){var e=k.get.value();return""===e?"":!k.has.selectInput()&&k.is.multiple()?"string"==typeof e?e.split(S.delimiter):"":e},remoteValues:function(){var t=k.get.values(),n=!1;return t&&("string"==typeof t&&(t=[t]),e.each(t,function(e,t){var i=k.read.remoteData(t);k.verbose("Restoring value from session data",i,t),i&&(n||(n={}),n[t]=i)})),n},choiceText:function(t,n){if(n=n!==i?n:S.preserveHTML,t)return t.find(D.menu).length>0&&(k.verbose("Retrieving text of element with sub-menu"),t=t.clone(),t.find(D.menu).remove(),t.find(D.menuIcon).remove()),t.data(P.text)!==i?t.data(P.text):n?e.trim(t.html()):e.trim(t.text())},choiceValue:function(t,n){return n=n||k.get.choiceText(t),!!t&&(t.data(P.value)!==i?String(t.data(P.value)):"string"==typeof n?e.trim(n.toLowerCase()):String(n))},inputEvent:function(){var e=V[0];return!!e&&(e.oninput!==i?"input":e.onpropertychange!==i?"propertychange":"keyup")},selectValues:function(){var t={};return t.values=[],I.find("option").each(function(){var n=e(this),o=n.html(),a=n.attr("disabled"),r=n.attr("value")!==i?n.attr("value"):o;"auto"===S.placeholder&&""===r?t.placeholder=o:t.values.push({name:o,value:r,disabled:a})}),S.placeholder&&"auto"!==S.placeholder&&(k.debug("Setting placeholder value to",S.placeholder),t.placeholder=S.placeholder),S.sortSelect?(t.values.sort(function(e,t){return e.name>t.name?1:-1}),k.debug("Retrieved and sorted values from select",t)):k.debug("Retrieved values from select",t),t},activeItem:function(){return X.filter("."+T.active)},selectedItem:function(){var e=X.not(D.unselectable).filter("."+T.selected);return e.length>0?e:X.eq(0)},itemWithAdditions:function(e){var t=k.get.item(e),n=k.create.userChoice(e),i=n&&n.length>0;return i&&(t=t.length>0?t.add(n):n),t},item:function(t,n){var o,a,r=!1;return t=t!==i?t:k.get.values()!==i?k.get.values():k.get.text(),o=a?t.length>0:t!==i&&null!==t,a=k.is.multiple()&&e.isArray(t),n=""===t||0===t||(n||!1),o&&X.each(function(){var o=e(this),s=k.get.choiceText(o),l=k.get.choiceValue(o,s);if(null!==l&&l!==i)if(a)e.inArray(String(l),t)===-1&&e.inArray(s,t)===-1||(r=r?r.add(o):o);else if(n){if(k.verbose("Ambiguous dropdown value using strict type check",o,t),l===t||s===t)return r=o,!0}else if(String(l)==String(t)||s==t)return k.verbose("Found select item by value",l,t),r=o,!0}),r}},check:{maxSelections:function(e){return!S.maxSelections||(e=e!==i?e:k.get.selectionCount(),e>=S.maxSelections?(k.debug("Maximum selection count reached"),S.useLabels&&(X.addClass(T.filtered),k.add.message(A.maxSelections)),!0):(k.verbose("No longer at maximum selection count"),k.remove.message(),k.remove.filteredItem(),k.is.searchSelection()&&k.filterItems(),!1))}},restore:{defaults:function(){k.clear(),k.restore.defaultText(),k.restore.defaultValue()},defaultText:function(){var e=k.get.defaultText(),t=k.get.placeholderText;e===t?(k.debug("Restoring default placeholder text",e),k.set.placeholderText(e)):(k.debug("Restoring default text",e),k.set.text(e))},placeholderText:function(){k.set.placeholderText()},defaultValue:function(){var e=k.get.defaultValue();e!==i&&(k.debug("Restoring default value",e),""!==e?(k.set.value(e),k.set.selected()):(k.remove.activeItem(),k.remove.selectedItem()))},labels:function(){S.allowAdditions&&(S.useLabels||(k.error(q.labels),S.useLabels=!0),k.debug("Restoring selected values"),k.create.userLabels()),k.check.maxSelections()},selected:function(){k.restore.values(),k.is.multiple()?(k.debug("Restoring previously selected values and labels"),k.restore.labels()):k.debug("Restoring previously selected values")},values:function(){k.set.initialLoad(),S.apiSettings&&S.saveRemoteData&&k.get.remoteValues()?k.restore.remoteValues():k.set.selected(),k.remove.initialLoad()},remoteValues:function(){var t=k.get.remoteValues();k.debug("Recreating selected from session data",t),t&&(k.is.single()?e.each(t,function(e,t){k.set.text(t)}):e.each(t,function(e,t){k.add.label(e,t)}))}},read:{remoteData:function(e){var n;return t.Storage===i?void k.error(q.noStorage):(n=sessionStorage.getItem(e),n!==i&&n)}},save:{defaults:function(){k.save.defaultText(),k.save.placeholderText(),k.save.defaultValue()},defaultValue:function(){var e=k.get.value();k.verbose("Saving default value as",e),I.data(P.defaultValue,e)},defaultText:function(){var e=k.get.text();k.verbose("Saving default text as",e),I.data(P.defaultText,e)},placeholderText:function(){var e;S.placeholder!==!1&&N.hasClass(T.placeholder)&&(e=k.get.text(),k.verbose("Saving placeholder text as",e),I.data(P.placeholderText,e))},remoteData:function(e,n){return t.Storage===i?void k.error(q.noStorage):(k.verbose("Saving remote data to session storage",n,e),void sessionStorage.setItem(n,e))}},clear:function(){k.is.multiple()&&S.useLabels?k.remove.labels():(k.remove.activeItem(),k.remove.selectedItem()),k.set.placeholderText(),k.clearValue()},clearValue:function(){k.set.value("")},scrollPage:function(e,t){var n,i,o,a=t||k.get.selectedItem(),r=a.closest(D.menu),s=r.outerHeight(),l=r.scrollTop(),c=X.eq(0).outerHeight(),u=Math.floor(s/c),d=(r.prop("scrollHeight"),"up"==e?l-c*u:l+c*u),f=X.not(D.unselectable);o="up"==e?f.index(a)-u:f.index(a)+u,n="up"==e?o>=0:o<f.length,i=n?f.eq(o):"up"==e?f.first():f.last(),i.length>0&&(k.debug("Scrolling page",e,i),a.removeClass(T.selected),i.addClass(T.selected),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(i),r.scrollTop(d))},set:{filtered:function(){var e=k.is.multiple(),t=k.is.searchSelection(),n=e&&t,i=t?k.get.query():"",o="string"==typeof i&&i.length>0,a=k.get.searchWidth(),r=""!==i;e&&o&&(k.verbose("Adjusting input width",a,S.glyphWidth),V.css("width",a)),o||n&&r?(k.verbose("Hiding placeholder text"),N.addClass(T.filtered)):(!e||n&&!r)&&(k.verbose("Showing placeholder text"),N.removeClass(T.filtered))},empty:function(){I.addClass(T.empty)},loading:function(){I.addClass(T.loading)},placeholderText:function(e){e=e||k.get.placeholderText(),k.debug("Setting placeholder text",e),k.set.text(e),N.addClass(T.placeholder)},tabbable:function(){k.has.search()?(k.debug("Added tabindex to searchable dropdown"),V.val("").attr("tabindex",0),Q.attr("tabindex",-1)):(k.debug("Added tabindex to dropdown"),I.attr("tabindex")===i&&(I.attr("tabindex",0),Q.attr("tabindex",-1)))},initialLoad:function(){k.verbose("Setting initial load"),h=!0},activeItem:function(e){S.allowAdditions&&e.filter(D.addition).length>0?e.addClass(T.filtered):e.addClass(T.active)},partialSearch:function(e){var t=k.get.query().length;V.val(e.substr(0,t))},scrollPosition:function(e,t){var n,o,a,r,s,l,c,u,d,f=5;e=e||k.get.selectedItem(),n=e.closest(D.menu),o=e&&e.length>0,t=t!==i&&t,e&&n.length>0&&o&&(r=e.position().top,n.addClass(T.loading),l=n.scrollTop(),s=n.offset().top,r=e.offset().top,a=l-s+r,t||(c=n.height(),d=l+c<a+f,u=a-f<l),k.debug("Scrolling to active item",a),(t||u||d)&&n.scrollTop(a),n.removeClass(T.loading))},text:function(e){"select"!==S.action&&("combo"==S.action?(k.debug("Changing combo button text",e,B),S.preserveHTML?B.html(e):B.text(e)):(e!==k.get.placeholderText()&&N.removeClass(T.placeholder),k.debug("Changing text",e,N),N.removeClass(T.filtered),S.preserveHTML?N.html(e):N.text(e)))},selectedItem:function(e){var t=k.get.choiceValue(e),n=k.get.choiceText(e,!1);k.debug("Setting user selection to item",e),k.remove.activeItem(),k.set.partialSearch(n),k.set.activeItem(e),k.set.selected(t,e),k.set.text(n)},selectedLetter:function(t){var n,i=X.filter("."+T.selected),o=i.length>0&&k.has.firstLetter(i,t),a=!1;o&&(n=i.nextAll(X).eq(0),k.has.firstLetter(n,t)&&(a=n)),a||X.each(function(){if(k.has.firstLetter(e(this),t))return a=e(this),!1}),a&&(k.verbose("Scrolling to next value with letter",t),k.set.scrollPosition(a),i.removeClass(T.selected),a.addClass(T.selected),S.selectOnKeydown&&k.is.single()&&k.set.selectedItem(a))},direction:function(e){"auto"==S.direction?k.is.onScreen(e)?k.remove.upward(e):k.set.upward(e):"upward"==S.direction&&k.set.upward(e)},upward:function(e){var t=e||I;t.addClass(T.upward)},value:function(e,t,n){var o=k.escape.value(e),a=U.length>0,r=(!k.has.value(e),k.get.values()),s=e!==i?String(e):e;if(a){if(!S.allowReselection&&s==r&&(k.verbose("Skipping value update already same value",e,r),!k.is.initialLoad()))return;k.is.single()&&k.has.selectInput()&&k.can.extendSelect()&&(k.debug("Adding user option",e),k.add.optionValue(e)),k.debug("Updating input value",o,r),K=!0,U.val(o),S.fireOnInit===!1&&k.is.initialLoad()?k.debug("Input native change event ignored on initial load"):k.trigger.change(),K=!1}else k.verbose("Storing value in metadata",o,U),o!==r&&I.data(P.value,s);S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("No callback on initial load",S.onChange):S.onChange.call(Z,e,t,n)},active:function(){I.addClass(T.active)},multiple:function(){I.addClass(T.multiple)},visible:function(){I.addClass(T.visible)},exactly:function(e,t){k.debug("Setting selected to exact values"),k.clear(),k.set.selected(e,t)},selected:function(t,n){var i=k.is.multiple();n=S.allowAdditions?n||k.get.itemWithAdditions(t):n||k.get.item(t),n&&(k.debug("Setting selected menu item to",n),k.is.multiple()&&k.remove.searchWidth(),k.is.single()?(k.remove.activeItem(),k.remove.selectedItem()):S.useLabels&&k.remove.selectedItem(),n.each(function(){var t=e(this),o=k.get.choiceText(t),a=k.get.choiceValue(t,o),r=t.hasClass(T.filtered),s=t.hasClass(T.active),l=t.hasClass(T.addition),c=i&&1==n.length;i?!s||l?(S.apiSettings&&S.saveRemoteData&&k.save.remoteData(o,a),S.useLabels?(k.add.value(a,o,t),k.add.label(a,o,c),k.set.activeItem(t),k.filterActive(),k.select.nextAvailable(n)):(k.add.value(a,o,t),k.set.text(k.add.variables(A.count)),k.set.activeItem(t))):r||(k.debug("Selected active value, removing label"),k.remove.selected(a)):(S.apiSettings&&S.saveRemoteData&&k.save.remoteData(o,a),k.set.text(o),k.set.value(a,o,t),t.addClass(T.active).addClass(T.selected))}))}},add:{label:function(t,n,i){var o,a=k.is.searchSelection()?V:N,r=k.escape.value(t);return o=e("<a />").addClass(T.label).attr("data-value",r).html(j.label(r,n)),o=S.onLabelCreate.call(o,r,n),k.has.label(t)?void k.debug("Label already exists, skipping",r):(S.label.variation&&o.addClass(S.label.variation),void(i===!0?(k.debug("Animating in label",o),o.addClass(T.hidden).insertBefore(a).transition(S.label.transition,S.label.duration)):(k.debug("Adding selection label",o),o.insertBefore(a))))},message:function(t){var n=Q.children(D.message),i=S.templates.message(k.add.variables(t));n.length>0?n.html(i):n=e("<div/>").html(i).addClass(T.message).appendTo(Q)},optionValue:function(t){var n=k.escape.value(t),i=U.find('option[value="'+n+'"]'),o=i.length>0;o||(k.disconnect.selectObserver(),k.is.single()&&(k.verbose("Removing previous user addition"),U.find("option."+T.addition).remove()),e("<option/>").prop("value",n).addClass(T.addition).html(t).appendTo(U),k.verbose("Adding user addition as an <option>",t),k.observe.select())},userSuggestion:function(e){var t,n=Q.children(D.addition),i=k.get.item(e),o=i&&i.not(D.addition).length,a=n.length>0;if(!S.useLabels||!k.has.maxSelections()){if(""===e||o)return void n.remove();a?(n.data(P.value,e).data(P.text,e).attr("data-"+P.value,e).attr("data-"+P.text,e).removeClass(T.filtered),S.hideAdditions||(t=S.templates.addition(k.add.variables(A.addResult,e)),n.html(t)),k.verbose("Replacing user suggestion with new value",n)):(n=k.create.userChoice(e),n.prependTo(Q),k.verbose("Adding item choice to menu corresponding with user choice addition",n)),S.hideAdditions&&!k.is.allFiltered()||n.addClass(T.selected).siblings().removeClass(T.selected),k.refreshItems()}},variables:function(e,t){var n,i,o=e.search("{count}")!==-1,a=e.search("{maxCount}")!==-1,r=e.search("{term}")!==-1;return k.verbose("Adding templated variables to message",e),o&&(n=k.get.selectionCount(),e=e.replace("{count}",n)),a&&(n=k.get.selectionCount(),e=e.replace("{maxCount}",S.maxSelections)),r&&(i=t||k.get.query(),e=e.replace("{term}",i)),e},value:function(t,n,i){var o,a=k.get.values();return""===t?void k.debug("Cannot select blank values from multiselect"):(e.isArray(a)?(o=a.concat([t]),o=k.get.uniqueArray(o)):o=[t],k.has.selectInput()?k.can.extendSelect()&&(k.debug("Adding value to select",t,o,U),k.add.optionValue(t)):(o=o.join(S.delimiter),k.debug("Setting hidden input to delimited value",o,U)),S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("Skipping onadd callback on initial load",S.onAdd):S.onAdd.call(Z,t,n,i),k.set.value(o,t,n,i),void k.check.maxSelections())}},remove:{active:function(){I.removeClass(T.active)},activeLabel:function(){I.find(D.label).removeClass(T.active)},empty:function(){I.removeClass(T.empty)},loading:function(){I.removeClass(T.loading)},initialLoad:function(){h=!1},upward:function(e){var t=e||I;t.removeClass(T.upward)},visible:function(){I.removeClass(T.visible)},activeItem:function(){X.removeClass(T.active)},filteredItem:function(){S.useLabels&&k.has.maxSelections()||(S.useLabels&&k.is.multiple()?X.not("."+T.active).removeClass(T.filtered):X.removeClass(T.filtered),k.remove.empty())},optionValue:function(e){var t=k.escape.value(e),n=U.find('option[value="'+t+'"]'),i=n.length>0;i&&n.hasClass(T.addition)&&(C&&(C.disconnect(),k.verbose("Temporarily disconnecting mutation observer")),n.remove(),k.verbose("Removing user addition as an <option>",t),C&&C.observe(U[0],{childList:!0,subtree:!0}))},message:function(){Q.children(D.message).remove()},searchWidth:function(){V.css("width","")},searchTerm:function(){k.verbose("Cleared search term"),V.val(""),k.set.filtered()},userAddition:function(){X.filter(D.addition).remove()},selected:function(t,n){return!!(n=S.allowAdditions?n||k.get.itemWithAdditions(t):n||k.get.item(t))&&void n.each(function(){var t=e(this),n=k.get.choiceText(t),i=k.get.choiceValue(t,n);k.is.multiple()?S.useLabels?(k.remove.value(i,n,t),k.remove.label(i)):(k.remove.value(i,n,t),0===k.get.selectionCount()?k.set.placeholderText():k.set.text(k.add.variables(A.count))):k.remove.value(i,n,t),t.removeClass(T.filtered).removeClass(T.active),S.useLabels&&t.removeClass(T.selected)})},selectedItem:function(){X.removeClass(T.selected)},value:function(e,t,n){var i,o=k.get.values();k.has.selectInput()?(k.verbose("Input is <select> removing selected option",e),i=k.remove.arrayValue(e,o),k.remove.optionValue(e)):(k.verbose("Removing from delimited values",e),i=k.remove.arrayValue(e,o),i=i.join(S.delimiter)),S.fireOnInit===!1&&k.is.initialLoad()?k.verbose("No callback on initial load",S.onRemove):S.onRemove.call(Z,e,t,n),k.set.value(i,t,n),k.check.maxSelections()},arrayValue:function(t,n){return e.isArray(n)||(n=[n]),n=e.grep(n,function(e){return t!=e}),k.verbose("Removed value from delimited string",t,n),n},label:function(e,t){var n=I.find(D.label),i=n.filter('[data-value="'+e+'"]');k.verbose("Removing label",i),i.remove()},activeLabels:function(e){e=e||I.find(D.label).filter("."+T.active),k.verbose("Removing active label selections",e),k.remove.labels(e)},labels:function(t){t=t||I.find(D.label),k.verbose("Removing labels",t),t.each(function(){var t=e(this),n=t.data(P.value),o=n!==i?String(n):n,a=k.is.userValue(o);return S.onLabelRemove.call(t,n)===!1?void k.debug("Label remove callback cancelled removal"):(k.remove.message(),void(a?(k.remove.value(o),k.remove.label(o)):k.remove.selected(o)))})},tabbable:function(){k.has.search()?(k.debug("Searchable dropdown initialized"),V.removeAttr("tabindex"),Q.removeAttr("tabindex")):(k.debug("Simple selection dropdown initialized"),I.removeAttr("tabindex"),Q.removeAttr("tabindex"))}},has:{menuSearch:function(){return k.has.search()&&V.closest(Q).length>0},search:function(){return V.length>0},sizer:function(){return H.length>0},selectInput:function(){return U.is("select")},minCharacters:function(e){return!S.minCharacters||(e=e!==i?String(e):String(k.get.query()),e.length>=S.minCharacters)},firstLetter:function(e,t){var n,i;return!(!e||0===e.length||"string"!=typeof t)&&(n=k.get.choiceText(e,!1),t=t.toLowerCase(),i=String(n).charAt(0).toLowerCase(),t==i)},input:function(){return U.length>0},items:function(){return X.length>0},menu:function(){return Q.length>0},message:function(){return 0!==Q.children(D.message).length},label:function(e){var t=k.escape.value(e),n=I.find(D.label);return n.filter('[data-value="'+t+'"]').length>0},maxSelections:function(){return S.maxSelections&&k.get.selectionCount()>=S.maxSelections},allResultsFiltered:function(){var e=X.not(D.addition);return e.filter(D.unselectable).length===e.length},userSuggestion:function(){return Q.children(D.addition).length>0},query:function(){return""!==k.get.query()},value:function(t){var n=k.get.values(),i=e.isArray(n)?n&&e.inArray(t,n)!==-1:n==t;return!!i}},is:{active:function(){return I.hasClass(T.active)},bubbledLabelClick:function(t){return e(t.target).is("select, input")&&I.closest("label").length>0},bubbledIconClick:function(t){return e(t.target).closest(W).length>0},alreadySetup:function(){return I.is("select")&&I.parent(D.dropdown).length>0&&0===I.prev().length},animating:function(e){return e?e.transition&&e.transition("is animating"):Q.transition&&Q.transition("is animating")},disabled:function(){return I.hasClass(T.disabled)},focused:function(){return n.activeElement===I[0]},focusedOnSearch:function(){return n.activeElement===V[0]},allFiltered:function(){return(k.is.multiple()||k.has.search())&&!(0==S.hideAdditions&&k.has.userSuggestion())&&!k.has.message()&&k.has.allResultsFiltered()},hidden:function(e){return!k.is.visible(e)},initialLoad:function(){return h},onScreen:function(e){var t,n=e||Q,i=!0,o={};return n.addClass(T.loading),t={context:{scrollTop:L.scrollTop(),height:L.outerHeight()},menu:{offset:n.offset(),height:n.outerHeight()}},o={above:t.context.scrollTop<=t.menu.offset.top-t.menu.height,below:t.context.scrollTop+t.context.height>=t.menu.offset.top+t.menu.height},o.below?(k.verbose("Dropdown can fit in context downward",o),i=!0):o.below||o.above?(k.verbose("Dropdown cannot fit below, opening upward",o),i=!1):(k.verbose("Dropdown cannot fit in either direction, favoring downward",o),i=!0),n.removeClass(T.loading),i},inObject:function(t,n){var i=!1;return e.each(n,function(e,n){if(n==t)return i=!0,!0}),i},multiple:function(){return I.hasClass(T.multiple)},single:function(){return!k.is.multiple()},selectMutation:function(t){var n=!1;return e.each(t,function(t,i){if(i.target&&e(i.target).is("select"))return n=!0,!0}),n},search:function(){return I.hasClass(T.search)},searchSelection:function(){return k.has.search()&&1===V.parent(D.dropdown).length},selection:function(){return I.hasClass(T.selection)},userValue:function(t){return e.inArray(t,k.get.userValues())!==-1},upward:function(e){var t=e||I;return t.hasClass(T.upward)},visible:function(e){return e?e.hasClass(T.visible):Q.hasClass(T.visible)}},can:{activate:function(e){return!!S.useLabels||(!k.has.maxSelections()||!(!k.has.maxSelections()||!e.hasClass(T.active)))},click:function(){return c||"click"==S.on},extendSelect:function(){return S.allowAdditions||S.apiSettings},show:function(){return!k.is.disabled()&&(k.has.items()||k.has.message())},useAPI:function(){return e.fn.api!==i}},animate:{show:function(t,n){var o,a=n||Q,r=n?function(){}:function(){k.hideSubMenus(),k.hideOthers(),k.set.active()};t=e.isFunction(t)?t:function(){},k.verbose("Doing menu show animation",a),k.set.direction(n),o=k.get.transition(n),k.is.selection()&&k.set.scrollPosition(k.get.selectedItem(),!0),(k.is.hidden(a)||k.is.animating(a))&&("none"==o?(r(),a.transition("show"),t.call(Z)):e.fn.transition!==i&&I.transition("is supported")?a.transition({animation:o+" in",debug:S.debug,verbose:S.verbose,duration:S.duration,queue:!0,onStart:r,onComplete:function(){t.call(Z)}}):k.error(q.noTransition,o))},hide:function(t,n){var o=n||Q,a=(n?.9*S.duration:S.duration,n?function(){}:function(){k.can.click()&&k.unbind.intent(),k.remove.active()}),r=k.get.transition(n);t=e.isFunction(t)?t:function(){},(k.is.visible(o)||k.is.animating(o))&&(k.verbose("Doing menu hide animation",o),"none"==r?(a(),o.transition("hide"),t.call(Z)):e.fn.transition!==i&&I.transition("is supported")?o.transition({animation:r+" out",duration:S.duration,debug:S.debug,verbose:S.verbose,queue:!0,onStart:a,onComplete:function(){"auto"==S.direction&&k.remove.upward(n),t.call(Z)}}):k.error(q.transition))}},hideAndClear:function(){k.remove.searchTerm(),k.has.maxSelections()||(k.has.search()?k.hide(function(){k.remove.filteredItem()}):k.hide())},delay:{show:function(){k.verbose("Delaying show event to ensure user intent"),clearTimeout(k.timer),k.timer=setTimeout(k.show,S.delay.show)},hide:function(){k.verbose("Delaying hide event to ensure user intent"),clearTimeout(k.timer),k.timer=setTimeout(k.hide,S.delay.hide)}},escape:{value:function(t){var n=e.isArray(t),i="string"==typeof t,o=!i&&!n,a=i&&t.search(O.quote)!==-1,r=[];return k.has.selectInput()&&!o&&a?(k.debug("Encoding quote values for use in select",t),n?(e.each(t,function(e,t){r.push(t.replace(O.quote,"&quot;"))}),r):t.replace(O.quote,"&quot;")):t},regExp:function(e){return e=String(e),e.replace(O.escape,"\\$&")}},setting:function(t,n){if(k.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,S,t);else{if(n===i)return S[t];e.isPlainObject(S[t])?e.extend(!0,S[t],n):S[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,k,t);else{if(n===i)return k[t];k[t]=n}},debug:function(){!S.silent&&S.debug&&(S.performance?k.performance.log(arguments):(k.debug=Function.prototype.bind.call(console.info,console,S.name+":"),k.debug.apply(console,arguments)))},verbose:function(){!S.silent&&S.verbose&&S.debug&&(S.performance?k.performance.log(arguments):(k.verbose=Function.prototype.bind.call(console.info,console,S.name+":"),k.verbose.apply(console,arguments)))},error:function(){S.silent||(k.error=Function.prototype.bind.call(console.error,console,S.name+":"),k.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;S.performance&&(t=(new Date).getTime(),i=u||t,n=t-i,u=t,d.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:Z,"Execution Time":n})),clearTimeout(k.performance.timer),k.performance.timer=setTimeout(k.performance.display,500)},display:function(){var t=S.name+":",n=0;u=!1,clearTimeout(k.performance.timer),e.each(d,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",l&&(t+=" '"+l+"'"),(console.group!==i||console.table!==i)&&d.length>0&&(console.groupCollapsed(t),console.table?console.table(d):e.each(d,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),d=[]}},invoke:function(t,n,o){var r,s,l,c=J;return n=n||g,o=Z||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(k.error(q.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},m?(J===i&&k.initialize(),k.invoke(f)):(J!==i&&J.invoke("destroy"),
k.initialize())}),a!==i?a:r},e.fn.dropdown.settings={silent:!1,debug:!1,verbose:!1,performance:!0,on:"click",action:"activate",apiSettings:!1,selectOnKeydown:!0,minCharacters:0,saveRemoteData:!0,throttle:200,context:t,direction:"auto",keepOnScreen:!0,match:"both",fullTextSearch:!1,placeholder:"auto",preserveHTML:!0,sortSelect:!1,forceSelection:!0,allowAdditions:!1,hideAdditions:!0,maxSelections:!1,useLabels:!0,delimiter:",",showOnFocus:!0,allowReselection:!1,allowTab:!0,allowCategorySelection:!1,fireOnInit:!1,transition:"auto",duration:200,glyphWidth:1.037,label:{transition:"scale",duration:200,variation:!1},delay:{hide:300,show:200,search:20,touch:50},onChange:function(e,t,n){},onAdd:function(e,t,n){},onRemove:function(e,t,n){},onLabelSelect:function(e){},onLabelCreate:function(t,n){return e(this)},onLabelRemove:function(e){return!0},onNoResults:function(e){return!0},onShow:function(){},onHide:function(){},name:"Dropdown",namespace:"dropdown",message:{addResult:"Add <b>{term}</b>",count:"{count} selected",maxSelections:"Max {maxCount} selections",noResults:"No results found.",serverError:"There was an error contacting the server"},error:{action:"You called a dropdown action that was not defined",alreadySetup:"Once a select has been initialized behaviors must be called on the created ui dropdown",labels:"Allowing user additions currently requires the use of labels.",missingMultiple:"<select> requires multiple property to be set to correctly preserve multiple values",method:"The method you called is not defined.",noAPI:"The API module is required to load resources remotely",noStorage:"Saving remote data requires session storage",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>"},regExp:{escape:/[-[\]{}()*+?.,\\^$|#\s]/g,quote:/"/g},metadata:{defaultText:"defaultText",defaultValue:"defaultValue",placeholderText:"placeholder",text:"text",value:"value"},fields:{remoteValues:"results",values:"values",disabled:"disabled",name:"name",value:"value",text:"text"},keys:{backspace:8,delimiter:188,deleteKey:46,enter:13,escape:27,pageUp:33,pageDown:34,leftArrow:37,upArrow:38,rightArrow:39,downArrow:40},selector:{addition:".addition",dropdown:".ui.dropdown",hidden:".hidden",icon:"> .dropdown.icon",input:'> input[type="hidden"], > select',item:".item",label:"> .label",remove:"> .label > .delete.icon",siblingLabel:".label",menu:".menu",message:".message",menuIcon:".dropdown.icon",search:"input.search, .menu > .search > input, .menu input.search",sizer:"> input.sizer",text:"> .text:not(.icon)",unselectable:".disabled, .filtered"},className:{active:"active",addition:"addition",animating:"animating",disabled:"disabled",empty:"empty",dropdown:"ui dropdown",filtered:"filtered",hidden:"hidden transition",item:"item",label:"ui label",loading:"loading",menu:"menu",message:"message",multiple:"multiple",placeholder:"default",sizer:"sizer",search:"search",selected:"selected",selection:"selection",upward:"upward",visible:"visible"}},e.fn.dropdown.settings.templates={dropdown:function(t){var n=t.placeholder||!1,i=(t.values||{},"");return i+='<i class="dropdown icon"></i>',i+=t.placeholder?'<div class="default text">'+n+"</div>":'<div class="text"></div>',i+='<div class="menu">',e.each(t.values,function(e,t){i+=t.disabled?'<div class="disabled item" data-value="'+t.value+'">'+t.name+"</div>":'<div class="item" data-value="'+t.value+'">'+t.name+"</div>"}),i+="</div>"},menu:function(t,n){var i=t[n.values]||{},o="";return e.each(i,function(e,t){var i=t[n.text]?'data-text="'+t[n.text]+'"':"",a=t[n.disabled]?"disabled ":"";o+='<div class="'+a+'item" data-value="'+t[n.value]+'"'+i+">",o+=t[n.name],o+="</div>"}),o},label:function(e,t){return t+'<i class="delete icon"></i>'},message:function(e){return e},addition:function(e){return e}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.embed=function(n){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var f,m=e.isPlainObject(n)?e.extend(!0,{},e.fn.embed.settings,n):e.extend({},e.fn.embed.settings),g=m.selector,p=m.className,h=m.sources,v=m.error,b=m.metadata,y=m.namespace,x=m.templates,C="."+y,w="module-"+y,k=(e(t),e(this)),S=k.find(g.placeholder),T=k.find(g.icon),A=k.find(g.embed),R=this,E=k.data(w);f={initialize:function(){f.debug("Initializing embed"),f.determine.autoplay(),f.create(),f.bind.events(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),E=f,k.data(w,f)},destroy:function(){f.verbose("Destroying previous instance of embed"),f.reset(),k.removeData(w).off(C)},refresh:function(){f.verbose("Refreshing selector cache"),S=k.find(g.placeholder),T=k.find(g.icon),A=k.find(g.embed)},bind:{events:function(){f.has.placeholder()&&(f.debug("Adding placeholder events"),k.on("click"+C,g.placeholder,f.createAndShow).on("click"+C,g.icon,f.createAndShow))}},create:function(){var e=f.get.placeholder();e?f.createPlaceholder():f.createAndShow()},createPlaceholder:function(e){var t=f.get.icon(),n=f.get.url();f.generate.embed(n);e=e||f.get.placeholder(),k.html(x.placeholder(e,t)),f.debug("Creating placeholder for embed",e,t)},createEmbed:function(t){f.refresh(),t=t||f.get.url(),A=e("<div/>").addClass(p.embed).html(f.generate.embed(t)).appendTo(k),m.onCreate.call(R,t),f.debug("Creating embed object",A)},changeEmbed:function(e){A.html(f.generate.embed(e))},createAndShow:function(){f.createEmbed(),f.show()},change:function(e,t,n){f.debug("Changing video to ",e,t,n),k.data(b.source,e).data(b.id,t),n?k.data(b.url,n):k.removeData(b.url),f.has.embed()?f.changeEmbed():f.create()},reset:function(){f.debug("Clearing embed and showing placeholder"),f.remove.active(),f.remove.embed(),f.showPlaceholder(),m.onReset.call(R)},show:function(){f.debug("Showing embed"),f.set.active(),m.onDisplay.call(R)},hide:function(){f.debug("Hiding embed"),f.showPlaceholder()},showPlaceholder:function(){f.debug("Showing placeholder image"),f.remove.active(),m.onPlaceholderDisplay.call(R)},get:{id:function(){return m.id||k.data(b.id)},placeholder:function(){return m.placeholder||k.data(b.placeholder)},icon:function(){return m.icon?m.icon:k.data(b.icon)!==i?k.data(b.icon):f.determine.icon()},source:function(e){return m.source?m.source:k.data(b.source)!==i?k.data(b.source):f.determine.source()},type:function(){var e=f.get.source();return h[e]!==i&&h[e].type},url:function(){return m.url?m.url:k.data(b.url)!==i?k.data(b.url):f.determine.url()}},determine:{autoplay:function(){f.should.autoplay()&&(m.autoplay=!0)},source:function(t){var n=!1;return t=t||f.get.url(),t&&e.each(h,function(e,i){if(t.search(i.domain)!==-1)return n=e,!1}),n},icon:function(){var e=f.get.source();return h[e]!==i&&h[e].icon},url:function(){var e,t=m.id||k.data(b.id),n=m.source||k.data(b.source);return e=h[n]!==i&&h[n].url.replace("{id}",t),e&&k.data(b.url,e),e}},set:{active:function(){k.addClass(p.active)}},remove:{active:function(){k.removeClass(p.active)},embed:function(){A.empty()}},encode:{parameters:function(e){var t,n=[];for(t in e)n.push(encodeURIComponent(t)+"="+encodeURIComponent(e[t]));return n.join("&amp;")}},generate:{embed:function(e){f.debug("Generating embed html");var t,n,i=f.get.source();return e=f.get.url(e),e?(n=f.generate.parameters(i),t=x.iframe(e,n)):f.error(v.noURL,k),t},parameters:function(t,n){var o=h[t]&&h[t].parameters!==i?h[t].parameters(m):{};return n=n||m.parameters,n&&(o=e.extend({},o,n)),o=m.onEmbed(o),f.encode.parameters(o)}},has:{embed:function(){return A.length>0},placeholder:function(){return m.placeholder||k.data(b.placeholder)}},should:{autoplay:function(){return"auto"===m.autoplay?m.placeholder||k.data(b.placeholder)!==i:m.autoplay}},is:{video:function(){return"video"==f.get.type()}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;s=!1,clearTimeout(f.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=E;return n=n||d,a=R||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(v.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},u?(E===i&&f.initialize(),f.invoke(c)):(E!==i&&E.invoke("destroy"),f.initialize())}),o!==i?o:this},e.fn.embed.settings={name:"Embed",namespace:"embed",silent:!1,debug:!1,verbose:!1,performance:!0,icon:!1,source:!1,url:!1,id:!1,autoplay:"auto",color:"#444444",hd:!0,brandedUI:!1,parameters:!1,onDisplay:function(){},onPlaceholderDisplay:function(){},onReset:function(){},onCreate:function(e){},onEmbed:function(e){return e},metadata:{id:"id",icon:"icon",placeholder:"placeholder",source:"source",url:"url"},error:{noURL:"No URL specified",method:"The method you called is not defined"},className:{active:"active",embed:"embed"},selector:{embed:".embed",placeholder:".placeholder",icon:".icon"},sources:{youtube:{name:"youtube",type:"video",icon:"video play",domain:"youtube.com",url:"//www.youtube.com/embed/{id}",parameters:function(e){return{autohide:!e.brandedUI,autoplay:e.autoplay,color:e.color||i,hq:e.hd,jsapi:e.api,modestbranding:!e.brandedUI}}},vimeo:{name:"vimeo",type:"video",icon:"video play",domain:"vimeo.com",url:"//player.vimeo.com/video/{id}",parameters:function(e){return{api:e.api,autoplay:e.autoplay,byline:e.brandedUI,color:e.color||i,portrait:e.brandedUI,title:e.brandedUI}}}},templates:{iframe:function(e,t){var n=e;return t&&(n+="?"+t),'<iframe src="'+n+'" width="100%" height="100%" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'},placeholder:function(e,t){var n="";return t&&(n+='<i class="'+t+' icon"></i>'),e&&(n+='<img class="placeholder" src="'+e+'">'),n}},api:!1,onPause:function(){},onPlay:function(){},onStop:function(){}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.modal=function(o){var a,r=e(this),s=e(t),l=e(n),c=e("body"),u=r.selector||"",d=(new Date).getTime(),f=[],m=arguments[0],g="string"==typeof m,p=[].slice.call(arguments,1),h=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var r,v,b,y,x,C,w,k,S,T=e.isPlainObject(o)?e.extend(!0,{},e.fn.modal.settings,o):e.extend({},e.fn.modal.settings),A=T.selector,R=T.className,E=T.namespace,P=T.error,F="."+E,O="module-"+E,D=e(this),q=e(T.context),j=D.find(A.close),z=this,M=D.data(O);S={initialize:function(){S.verbose("Initializing dimmer",q),S.create.id(),S.create.dimmer(),S.refreshModals(),S.bind.events(),T.observeChanges&&S.observeChanges(),S.instantiate()},instantiate:function(){S.verbose("Storing instance of modal"),M=S,D.data(O,M)},create:{dimmer:function(){var t={debug:T.debug,dimmerName:"modals",duration:{show:T.duration,hide:T.duration}},n=e.extend(!0,t,T.dimmerSettings);return T.inverted&&(n.variation=n.variation!==i?n.variation+" inverted":"inverted"),e.fn.dimmer===i?void S.error(P.dimmer):(S.debug("Creating dimmer with settings",n),y=q.dimmer(n),T.detachable?(S.verbose("Modal is detachable, moving content into dimmer"),y.dimmer("add content",D)):S.set.undetached(),T.blurring&&y.addClass(R.blurring),void(x=y.dimmer("get dimmer")))},id:function(){w=(Math.random().toString(16)+"000000000").substr(2,8),C="."+w,S.verbose("Creating unique id for element",w)}},destroy:function(){S.verbose("Destroying previous modal"),D.removeData(O).off(F),s.off(C),x.off(C),j.off(F),q.dimmer("destroy")},observeChanges:function(){"MutationObserver"in t&&(k=new MutationObserver(function(e){S.debug("DOM tree modified, refreshing"),S.refresh()}),k.observe(z,{childList:!0,subtree:!0}),S.debug("Setting up mutation observer",k))},refresh:function(){S.remove.scrolling(),S.cacheSizes(),S.set.screenHeight(),S.set.type(),S.set.position()},refreshModals:function(){v=D.siblings(A.modal),r=v.add(D)},attachEvents:function(t,n){var i=e(t);n=e.isFunction(S[n])?S[n]:S.toggle,i.length>0?(S.debug("Attaching modal events to element",t,n),i.off(F).on("click"+F,n)):S.error(P.notFound,t)},bind:{events:function(){S.verbose("Attaching events"),D.on("click"+F,A.close,S.event.close).on("click"+F,A.approve,S.event.approve).on("click"+F,A.deny,S.event.deny),s.on("resize"+C,S.event.resize)}},get:{id:function(){return(Math.random().toString(16)+"000000000").substr(2,8)}},event:{approve:function(){return T.onApprove.call(z,e(this))===!1?void S.verbose("Approve callback returned false cancelling hide"):void S.hide()},deny:function(){return T.onDeny.call(z,e(this))===!1?void S.verbose("Deny callback returned false cancelling hide"):void S.hide()},close:function(){S.hide()},click:function(t){var i=e(t.target),o=i.closest(A.modal).length>0,a=e.contains(n.documentElement,t.target);!o&&a&&(S.debug("Dimmer clicked, hiding all modals"),S.is.active()&&(S.remove.clickaway(),T.allowMultiple?S.hide():S.hideAll()))},debounce:function(e,t){clearTimeout(S.timer),S.timer=setTimeout(e,t)},keyboard:function(e){var t=e.which,n=27;t==n&&(T.closable?(S.debug("Escape key pressed hiding modal"),S.hide()):S.debug("Escape key pressed, but closable is set to false"),e.preventDefault())},resize:function(){y.dimmer("is active")&&h(S.refresh)}},toggle:function(){S.is.active()||S.is.animating()?S.hide():S.show()},show:function(t){t=e.isFunction(t)?t:function(){},S.refreshModals(),S.showModal(t)},hide:function(t){t=e.isFunction(t)?t:function(){},S.refreshModals(),S.hideModal(t)},showModal:function(t){t=e.isFunction(t)?t:function(){},S.is.animating()||!S.is.active()?(S.showDimmer(),S.cacheSizes(),S.set.position(),S.set.screenHeight(),S.set.type(),S.set.clickaway(),!T.allowMultiple&&S.others.active()?S.hideOthers(S.showModal):(T.onShow.call(z),T.transition&&e.fn.transition!==i&&D.transition("is supported")?(S.debug("Showing modal with css animations"),D.transition({debug:T.debug,animation:T.transition+" in",queue:T.queue,duration:T.duration,useFailSafe:!0,onComplete:function(){T.onVisible.apply(z),T.keyboardShortcuts&&S.add.keyboardShortcuts(),S.save.focus(),S.set.active(),T.autofocus&&S.set.autofocus(),t()}})):S.error(P.noTransition))):S.debug("Modal is already visible")},hideModal:function(t,n){return t=e.isFunction(t)?t:function(){},S.debug("Hiding modal"),T.onHide.call(z,e(this))===!1?void S.verbose("Hide callback returned false cancelling hide"):void((S.is.animating()||S.is.active())&&(T.transition&&e.fn.transition!==i&&D.transition("is supported")?(S.remove.active(),D.transition({debug:T.debug,animation:T.transition+" out",queue:T.queue,duration:T.duration,useFailSafe:!0,onStart:function(){S.others.active()||n||S.hideDimmer(),T.keyboardShortcuts&&S.remove.keyboardShortcuts()},onComplete:function(){T.onHidden.call(z),S.restore.focus(),t()}})):S.error(P.noTransition)))},showDimmer:function(){y.dimmer("is animating")||!y.dimmer("is active")?(S.debug("Showing dimmer"),y.dimmer("show")):S.debug("Dimmer already visible")},hideDimmer:function(){return y.dimmer("is animating")||y.dimmer("is active")?void y.dimmer("hide",function(){S.remove.clickaway(),S.remove.screenHeight()}):void S.debug("Dimmer is not visible cannot hide")},hideAll:function(t){var n=r.filter("."+R.active+", ."+R.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(S.debug("Hiding all visible modals"),S.hideDimmer(),n.modal("hide modal",t))},hideOthers:function(t){var n=v.filter("."+R.active+", ."+R.animating);t=e.isFunction(t)?t:function(){},n.length>0&&(S.debug("Hiding other modals",v),n.modal("hide modal",t,!0))},others:{active:function(){return v.filter("."+R.active).length>0},animating:function(){return v.filter("."+R.animating).length>0}},add:{keyboardShortcuts:function(){S.verbose("Adding keyboard shortcuts"),l.on("keyup"+F,S.event.keyboard)}},save:{focus:function(){b=e(n.activeElement).blur()}},restore:{focus:function(){b&&b.length>0&&b.focus()}},remove:{active:function(){D.removeClass(R.active)},clickaway:function(){T.closable&&x.off("click"+C)},bodyStyle:function(){""===c.attr("style")&&(S.verbose("Removing style attribute"),c.removeAttr("style"))},screenHeight:function(){S.debug("Removing page height"),c.css("height","")},keyboardShortcuts:function(){S.verbose("Removing keyboard shortcuts"),l.off("keyup"+F)},scrolling:function(){y.removeClass(R.scrolling),D.removeClass(R.scrolling)}},cacheSizes:function(){var o=D.outerHeight();S.cache!==i&&0===o||(S.cache={pageHeight:e(n).outerHeight(),height:o+T.offset,contextHeight:"body"==T.context?e(t).height():y.height()}),S.debug("Caching modal and container sizes",S.cache)},can:{fit:function(){return S.cache.height+2*T.padding<S.cache.contextHeight}},is:{active:function(){return D.hasClass(R.active)},animating:function(){return D.transition("is supported")?D.transition("is animating"):D.is(":visible")},scrolling:function(){return y.hasClass(R.scrolling)},modernBrowser:function(){return!(t.ActiveXObject||"ActiveXObject"in t)}},set:{autofocus:function(){var e=D.find("[tabindex], :input").filter(":visible"),t=e.filter("[autofocus]"),n=t.length>0?t.first():e.first();n.length>0&&n.focus()},clickaway:function(){T.closable&&x.on("click"+C,S.event.click)},screenHeight:function(){S.can.fit()?c.css("height",""):(S.debug("Modal is taller than page content, resizing page height"),c.css("height",S.cache.height+2*T.padding))},active:function(){D.addClass(R.active)},scrolling:function(){y.addClass(R.scrolling),D.addClass(R.scrolling)},type:function(){S.can.fit()?(S.verbose("Modal fits on screen"),S.others.active()||S.others.animating()||S.remove.scrolling()):(S.verbose("Modal cannot fit on screen setting to scrolling"),S.set.scrolling())},position:function(){S.verbose("Centering modal on page",S.cache),S.can.fit()?D.css({top:"",marginTop:-(S.cache.height/2)}):D.css({marginTop:"",top:l.scrollTop()})},undetached:function(){y.addClass(R.undetached)}},setting:function(t,n){if(S.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,T,t);else{if(n===i)return T[t];e.isPlainObject(T[t])?e.extend(!0,T[t],n):T[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,S,t);else{if(n===i)return S[t];S[t]=n}},debug:function(){!T.silent&&T.debug&&(T.performance?S.performance.log(arguments):(S.debug=Function.prototype.bind.call(console.info,console,T.name+":"),S.debug.apply(console,arguments)))},verbose:function(){!T.silent&&T.verbose&&T.debug&&(T.performance?S.performance.log(arguments):(S.verbose=Function.prototype.bind.call(console.info,console,T.name+":"),S.verbose.apply(console,arguments)))},error:function(){T.silent||(S.error=Function.prototype.bind.call(console.error,console,T.name+":"),S.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;T.performance&&(t=(new Date).getTime(),i=d||t,n=t-i,d=t,f.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:z,"Execution Time":n})),clearTimeout(S.performance.timer),S.performance.timer=setTimeout(S.performance.display,500)},display:function(){var t=T.name+":",n=0;d=!1,clearTimeout(S.performance.timer),e.each(f,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",u&&(t+=" '"+u+"'"),(console.group!==i||console.table!==i)&&f.length>0&&(console.groupCollapsed(t),console.table?console.table(f):e.each(f,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),f=[]}},invoke:function(t,n,o){var r,s,l,c=M;return n=n||p,o=z||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},g?(M===i&&S.initialize(),S.invoke(m)):(M!==i&&M.invoke("destroy"),S.initialize())}),a!==i?a:this},e.fn.modal.settings={name:"Modal",namespace:"modal",silent:!1,debug:!1,verbose:!1,performance:!0,observeChanges:!1,allowMultiple:!1,detachable:!0,closable:!0,autofocus:!0,inverted:!1,blurring:!1,dimmerSettings:{closable:!1,useCSS:!0},keyboardShortcuts:!0,context:"body",queue:!1,duration:500,offset:0,transition:"scale",padding:50,onShow:function(){},onVisible:function(){},onHide:function(){return!0},onHidden:function(){},onApprove:function(){return!0},onDeny:function(){return!0},selector:{close:"> .close",approve:".actions .positive, .actions .approve, .actions .ok",deny:".actions .negative, .actions .deny, .actions .cancel",modal:".ui.modal"},error:{dimmer:"UI Dimmer, a required component is not included in this page",method:"The method you called is not defined.",notFound:"The element you specified could not be found"},className:{active:"active",animating:"animating",blurring:"blurring",scrolling:"scrolling",undetached:"undetached"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.nag=function(n){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f=e.isPlainObject(n)?e.extend(!0,{},e.fn.nag.settings,n):e.extend({},e.fn.nag.settings),m=(f.className,f.selector),g=f.error,p=f.namespace,h="."+p,v=p+"-module",b=e(this),y=(b.find(m.close),e(f.context?f.context:"body")),x=this,C=b.data(v);t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};a={initialize:function(){a.verbose("Initializing element"),b.on("click"+h,m.close,a.dismiss).data(v,a),f.detachable&&b.parent()[0]!==y[0]&&b.detach().prependTo(y),f.displayTime>0&&setTimeout(a.hide,f.displayTime),a.show()},destroy:function(){a.verbose("Destroying instance"),b.removeData(v).off(h)},show:function(){a.should.show()&&!b.is(":visible")&&(a.debug("Showing nag",f.animation.show),"fade"==f.animation.show?b.fadeIn(f.duration,f.easing):b.slideDown(f.duration,f.easing))},hide:function(){a.debug("Showing nag",f.animation.hide),"fade"==f.animation.show?b.fadeIn(f.duration,f.easing):b.slideUp(f.duration,f.easing)},onHide:function(){a.debug("Removing nag",f.animation.hide),b.remove(),f.onHide&&f.onHide()},dismiss:function(e){f.storageMethod&&a.storage.set(f.key,f.value),a.hide(),e.stopImmediatePropagation(),e.preventDefault()},should:{show:function(){return f.persist?(a.debug("Persistent nag is set, can show nag"),!0):a.storage.get(f.key)!=f.value.toString()?(a.debug("Stored value is not set, can show nag",a.storage.get(f.key)),!0):(a.debug("Stored value is set, cannot show nag",a.storage.get(f.key)),!1)}},get:{storageOptions:function(){var e={};return f.expires&&(e.expires=f.expires),f.domain&&(e.domain=f.domain),f.path&&(e.path=f.path),e}},clear:function(){a.storage.remove(f.key)},storage:{set:function(n,o){var r=a.get.storageOptions();if("localstorage"==f.storageMethod&&t.localStorage!==i)t.localStorage.setItem(n,o),a.debug("Value stored using local storage",n,o);else if("sessionstorage"==f.storageMethod&&t.sessionStorage!==i)t.sessionStorage.setItem(n,o),a.debug("Value stored using session storage",n,o);else{if(e.cookie===i)return void a.error(g.noCookieStorage);e.cookie(n,o,r),a.debug("Value stored using cookie",n,o,r)}},get:function(n,o){var r;return"localstorage"==f.storageMethod&&t.localStorage!==i?r=t.localStorage.getItem(n):"sessionstorage"==f.storageMethod&&t.sessionStorage!==i?r=t.sessionStorage.getItem(n):e.cookie!==i?r=e.cookie(n):a.error(g.noCookieStorage),"undefined"!=r&&"null"!=r&&r!==i&&null!==r||(r=i),r},remove:function(n){var o=a.get.storageOptions();"localstorage"==f.storageMethod&&t.localStorage!==i?t.localStorage.removeItem(n):"sessionstorage"==f.storageMethod&&t.sessionStorage!==i?t.sessionStorage.removeItem(n):e.cookie!==i?e.removeCookie(n,o):a.error(g.noStorage)}},setting:function(t,n){if(a.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],n):f[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,a,t);else{if(n===i)return a[t];a[t]=n}},debug:function(){!f.silent&&f.debug&&(f.performance?a.performance.log(arguments):(a.debug=Function.prototype.bind.call(console.info,console,f.name+":"),a.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?a.performance.log(arguments):(a.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),a.verbose.apply(console,arguments)))},error:function(){f.silent||(a.error=Function.prototype.bind.call(console.error,console,f.name+":"),a.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;f.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:x,"Execution Time":n})),clearTimeout(a.performance.timer),a.performance.timer=setTimeout(a.performance.display,500)},display:function(){var t=f.name+":",n=0;s=!1,clearTimeout(a.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,r){var s,l,c,u=C;return n=n||d,r=x||r,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(n,o){var r=n!=s?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(u[r])&&n!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[o])||n==s)return u[o]!==i?(l=u[o],!1):(a.error(g.method,t),!1);u=u[o]}})),e.isFunction(l)?c=l.apply(r,n):l!==i&&(c=l),e.isArray(o)?o.push(c):o!==i?o=[o,c]:c!==i&&(o=c),l}},u?(C===i&&a.initialize(),a.invoke(c)):(C!==i&&C.invoke("destroy"),a.initialize())}),o!==i?o:this},e.fn.nag.settings={name:"Nag",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"Nag",persist:!1,displayTime:0,animation:{show:"slide",hide:"slide"},context:!1,detachable:!1,expires:30,domain:!1,path:"/",storageMethod:"cookie",key:"nag",value:"dismiss",error:{noCookieStorage:"$.cookie is not included. A storage solution is required.",noStorage:"Neither $.cookie or store is defined. A storage solution is required for storing state",method:"The method you called is not defined."},className:{bottom:"bottom",fixed:"fixed"},selector:{close:".close.icon"},speed:500,easing:"easeOutQuad",onHide:function(){}},e.extend(e.easing,{easeOutQuad:function(e,t,n,i,o){return-i*(t/=o)*(t-2)+n}})}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.popup=function(o){var a,r=e(this),s=e(n),l=e(t),c=e("body"),u=r.selector||"",d=!0,f=(new Date).getTime(),m=[],g=arguments[0],p="string"==typeof g,h=[].slice.call(arguments,1);return r.each(function(){var r,v,b,y,x,C,w=e.isPlainObject(o)?e.extend(!0,{},e.fn.popup.settings,o):e.extend({},e.fn.popup.settings),k=w.selector,S=w.className,T=w.error,A=w.metadata,R=w.namespace,E="."+w.namespace,P="module-"+R,F=e(this),O=e(w.context),D=e(w.scrollContext),q=e(w.boundary),j=w.target?e(w.target):F,z=0,M=!1,I=!1,L=this,N=F.data(P);C={initialize:function(){C.debug("Initializing",F),C.createID(),C.bind.events(),!C.exists()&&w.preserve&&C.create(),w.observeChanges&&C.observeChanges(),C.instantiate()},instantiate:function(){C.verbose("Storing instance",C),N=C,F.data(P,N)},observeChanges:function(){"MutationObserver"in t&&(b=new MutationObserver(C.event.documentChanged),b.observe(n,{childList:!0,subtree:!0}),C.debug("Setting up mutation observer",b))},refresh:function(){w.popup?r=e(w.popup).eq(0):w.inline&&(r=j.nextAll(k.popup).eq(0),w.popup=r),w.popup?(r.addClass(S.loading),v=C.get.offsetParent(),r.removeClass(S.loading),w.movePopup&&C.has.popup()&&C.get.offsetParent(r)[0]!==v[0]&&(C.debug("Moving popup to the same offset parent as activating element"),r.detach().appendTo(v))):v=w.inline?C.get.offsetParent(j):C.has.popup()?C.get.offsetParent(r):c,v.is("html")&&v[0]!==c[0]&&(C.debug("Setting page as offset parent"),v=c),C.get.variation()&&C.set.variation()},reposition:function(){C.refresh(),C.set.position()},destroy:function(){C.debug("Destroying previous module"),b&&b.disconnect(),r&&!w.preserve&&C.removePopup(),clearTimeout(C.hideTimer),clearTimeout(C.showTimer),C.unbind.close(),C.unbind.events(),F.removeData(P)},event:{start:function(t){var n=e.isPlainObject(w.delay)?w.delay.show:w.delay;clearTimeout(C.hideTimer),I||(C.showTimer=setTimeout(C.show,n))},end:function(){var t=e.isPlainObject(w.delay)?w.delay.hide:w.delay;clearTimeout(C.showTimer),C.hideTimer=setTimeout(C.hide,t)},touchstart:function(e){I=!0,C.show()},resize:function(){C.is.visible()&&C.set.position()},documentChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==L||e(t).find(L).length>0)&&(C.debug("Element removed from DOM, tearing down events"),C.destroy())})})},hideGracefully:function(t){var i=e(t.target),o=e.contains(n.documentElement,t.target),a=i.closest(k.popup).length>0;t&&!a&&o?(C.debug("Click occurred outside popup hiding popup"),C.hide()):C.debug("Click was inside popup, keeping popup open")}},create:function(){var t=C.get.html(),n=C.get.title(),i=C.get.content();t||i||n?(C.debug("Creating pop-up html"),t||(t=w.templates.popup({title:n,content:i})),r=e("<div/>").addClass(S.popup).data(A.activator,F).html(t),w.inline?(C.verbose("Inserting popup element inline",r),r.insertAfter(F)):(C.verbose("Appending popup element to body",r),r.appendTo(O)),C.refresh(),C.set.variation(),w.hoverable&&C.bind.popup(),w.onCreate.call(r,L)):0!==j.next(k.popup).length?(C.verbose("Pre-existing popup found"),w.inline=!0,w.popup=j.next(k.popup).data(A.activator,F),C.refresh(),w.hoverable&&C.bind.popup()):w.popup?(e(w.popup).data(A.activator,F),C.verbose("Used popup specified in settings"),C.refresh(),w.hoverable&&C.bind.popup()):C.debug("No content specified skipping display",L)},createID:function(){x=(Math.random().toString(16)+"000000000").substr(2,8),y="."+x,C.verbose("Creating unique id for element",x)},toggle:function(){C.debug("Toggling pop-up"),C.is.hidden()?(C.debug("Popup is hidden, showing pop-up"),C.unbind.close(),C.show()):(C.debug("Popup is visible, hiding pop-up"),
C.hide())},show:function(e){if(e=e||function(){},C.debug("Showing pop-up",w.transition),C.is.hidden()&&(!C.is.active()||!C.is.dropdown())){if(C.exists()||C.create(),w.onShow.call(r,L)===!1)return void C.debug("onShow callback returned false, cancelling popup animation");w.preserve||w.popup||C.refresh(),r&&C.set.position()&&(C.save.conditions(),w.exclusive&&C.hideAll(),C.animate.show(e))}},hide:function(e){if(e=e||function(){},C.is.visible()||C.is.animating()){if(w.onHide.call(r,L)===!1)return void C.debug("onHide callback returned false, cancelling popup animation");C.remove.visible(),C.unbind.close(),C.restore.conditions(),C.animate.hide(e)}},hideAll:function(){e(k.popup).filter("."+S.visible).each(function(){e(this).data(A.activator).popup("hide")})},exists:function(){return!!r&&(w.inline||w.popup?C.has.popup():r.closest(O).length>=1)},removePopup:function(){C.has.popup()&&!w.popup&&(C.debug("Removing popup",r),r.remove(),r=i,w.onRemove.call(r,L))},save:{conditions:function(){C.cache={title:F.attr("title")},C.cache.title&&F.removeAttr("title"),C.verbose("Saving original attributes",C.cache.title)}},restore:{conditions:function(){return C.cache&&C.cache.title&&(F.attr("title",C.cache.title),C.verbose("Restoring original attributes",C.cache.title)),!0}},supports:{svg:function(){return typeof SVGGraphicsElement===i}},animate:{show:function(t){t=e.isFunction(t)?t:function(){},w.transition&&e.fn.transition!==i&&F.transition("is supported")?(C.set.visible(),r.transition({animation:w.transition+" in",queue:!1,debug:w.debug,verbose:w.verbose,duration:w.duration,onComplete:function(){C.bind.close(),t.call(r,L),w.onVisible.call(r,L)}})):C.error(T.noTransition)},hide:function(t){return t=e.isFunction(t)?t:function(){},C.debug("Hiding pop-up"),w.onHide.call(r,L)===!1?void C.debug("onHide callback returned false, cancelling popup animation"):void(w.transition&&e.fn.transition!==i&&F.transition("is supported")?r.transition({animation:w.transition+" out",queue:!1,duration:w.duration,debug:w.debug,verbose:w.verbose,onComplete:function(){C.reset(),t.call(r,L),w.onHidden.call(r,L)}}):C.error(T.noTransition))}},change:{content:function(e){r.html(e)}},get:{html:function(){return F.removeData(A.html),F.data(A.html)||w.html},title:function(){return F.removeData(A.title),F.data(A.title)||w.title},content:function(){return F.removeData(A.content),F.data(A.content)||F.attr("title")||w.content},variation:function(){return F.removeData(A.variation),F.data(A.variation)||w.variation},popup:function(){return r},popupOffset:function(){return r.offset()},calculations:function(){var e,n=j[0],i=q[0]==t,o=w.inline||w.popup&&w.movePopup?j.position():j.offset(),a=i?{top:0,left:0}:q.offset(),s={},c=i?{top:l.scrollTop(),left:l.scrollLeft()}:{top:0,left:0};return s={target:{element:j[0],width:j.outerWidth(),height:j.outerHeight(),top:o.top,left:o.left,margin:{}},popup:{width:r.outerWidth(),height:r.outerHeight()},parent:{width:v.outerWidth(),height:v.outerHeight()},screen:{top:a.top,left:a.left,scroll:{top:c.top,left:c.left},width:q.width(),height:q.height()}},w.setFluidWidth&&C.is.fluid()&&(s.container={width:r.parent().outerWidth()},s.popup.width=s.container.width),s.target.margin.top=w.inline?parseInt(t.getComputedStyle(n).getPropertyValue("margin-top"),10):0,s.target.margin.left=w.inline?C.is.rtl()?parseInt(t.getComputedStyle(n).getPropertyValue("margin-right"),10):parseInt(t.getComputedStyle(n).getPropertyValue("margin-left"),10):0,e=s.screen,s.boundary={top:e.top+e.scroll.top,bottom:e.top+e.scroll.top+e.height,left:e.left+e.scroll.left,right:e.left+e.scroll.left+e.width},s},id:function(){return x},startEvent:function(){return"hover"==w.on?"mouseenter":"focus"==w.on&&"focus"},scrollEvent:function(){return"scroll"},endEvent:function(){return"hover"==w.on?"mouseleave":"focus"==w.on&&"blur"},distanceFromBoundary:function(e,t){var n,i,o={};return t=t||C.get.calculations(),n=t.popup,i=t.boundary,e&&(o={top:e.top-i.top,left:e.left-i.left,right:i.right-(e.left+n.width),bottom:i.bottom-(e.top+n.height)},C.verbose("Distance from boundaries determined",e,o)),o},offsetParent:function(t){var n=t!==i?t[0]:F[0],o=n.parentNode,a=e(o);if(o)for(var r="none"===a.css("transform"),s="static"===a.css("position"),l=a.is("html");o&&!l&&s&&r;)o=o.parentNode,a=e(o),r="none"===a.css("transform"),s="static"===a.css("position"),l=a.is("html");return a&&a.length>0?a:e()},positions:function(){return{"top left":!1,"top center":!1,"top right":!1,"bottom left":!1,"bottom center":!1,"bottom right":!1,"left center":!1,"right center":!1}},nextPosition:function(e){var t=e.split(" "),n=t[0],i=t[1],o={top:"bottom",bottom:"top",left:"right",right:"left"},a={left:"center",center:"right",right:"left"},r={"top left":"top center","top center":"top right","top right":"right center","right center":"bottom right","bottom right":"bottom center","bottom center":"bottom left","bottom left":"left center","left center":"top left"},s="top"==n||"bottom"==n,l=!1,c=!1,u=!1;return M||(C.verbose("All available positions available"),M=C.get.positions()),C.debug("Recording last position tried",e),M[e]=!0,"opposite"===w.prefer&&(u=[o[n],i],u=u.join(" "),l=M[u]===!0,C.debug("Trying opposite strategy",u)),"adjacent"===w.prefer&&s&&(u=[n,a[i]],u=u.join(" "),c=M[u]===!0,C.debug("Trying adjacent strategy",u)),(c||l)&&(C.debug("Using backup position",u),u=r[e]),u}},set:{position:function(e,t){if(0===j.length||0===r.length)return void C.error(T.notFound);var n,o,a,s,l,c,u,d;if(t=t||C.get.calculations(),e=e||F.data(A.position)||w.position,n=F.data(A.offset)||w.offset,o=w.distanceAway,a=t.target,s=t.popup,l=t.parent,0===a.width&&0===a.height&&!C.is.svg(a.element))return C.debug("Popup target is hidden, no action taken"),!1;switch(w.inline&&(C.debug("Adding margin to calculation",a.margin),"left center"==e||"right center"==e?(n+=a.margin.top,o+=-a.margin.left):"top left"==e||"top center"==e||"top right"==e?(n+=a.margin.left,o-=a.margin.top):(n+=a.margin.left,o+=a.margin.top)),C.debug("Determining popup position from calculations",e,t),C.is.rtl()&&(e=e.replace(/left|right/g,function(e){return"left"==e?"right":"left"}),C.debug("RTL: Popup position updated",e)),z==w.maxSearchDepth&&"string"==typeof w.lastResort&&(e=w.lastResort),e){case"top left":c={top:"auto",bottom:l.height-a.top+o,left:a.left+n,right:"auto"};break;case"top center":c={bottom:l.height-a.top+o,left:a.left+a.width/2-s.width/2+n,top:"auto",right:"auto"};break;case"top right":c={bottom:l.height-a.top+o,right:l.width-a.left-a.width-n,top:"auto",left:"auto"};break;case"left center":c={top:a.top+a.height/2-s.height/2+n,right:l.width-a.left+o,left:"auto",bottom:"auto"};break;case"right center":c={top:a.top+a.height/2-s.height/2+n,left:a.left+a.width+o,bottom:"auto",right:"auto"};break;case"bottom left":c={top:a.top+a.height+o,left:a.left+n,bottom:"auto",right:"auto"};break;case"bottom center":c={top:a.top+a.height+o,left:a.left+a.width/2-s.width/2+n,bottom:"auto",right:"auto"};break;case"bottom right":c={top:a.top+a.height+o,right:l.width-a.left-a.width-n,left:"auto",bottom:"auto"}}if(c===i&&C.error(T.invalidPosition,e),C.debug("Calculated popup positioning values",c),r.css(c).removeClass(S.position).addClass(e).addClass(S.loading),u=C.get.popupOffset(),d=C.get.distanceFromBoundary(u,t),C.is.offstage(d,e)){if(C.debug("Position is outside viewport",e),z<w.maxSearchDepth)return z++,e=C.get.nextPosition(e),C.debug("Trying new position",e),!!r&&C.set.position(e,t);if(!w.lastResort)return C.debug("Popup could not find a position to display",r),C.error(T.cannotPlace,L),C.remove.attempts(),C.remove.loading(),C.reset(),w.onUnplaceable.call(r,L),!1;C.debug("No position found, showing with last position")}return C.debug("Position is on stage",e),C.remove.attempts(),C.remove.loading(),w.setFluidWidth&&C.is.fluid()&&C.set.fluidWidth(t),!0},fluidWidth:function(e){e=e||C.get.calculations(),C.debug("Automatically setting element width to parent width",e.parent.width),r.css("width",e.container.width)},variation:function(e){e=e||C.get.variation(),e&&C.has.popup()&&(C.verbose("Adding variation to popup",e),r.addClass(e))},visible:function(){F.addClass(S.visible)}},remove:{loading:function(){r.removeClass(S.loading)},variation:function(e){e=e||C.get.variation(),e&&(C.verbose("Removing variation",e),r.removeClass(e))},visible:function(){F.removeClass(S.visible)},attempts:function(){C.verbose("Resetting all searched positions"),z=0,M=!1}},bind:{events:function(){C.debug("Binding popup events to module"),"click"==w.on&&F.on("click"+E,C.toggle),"hover"==w.on&&d&&F.on("touchstart"+E,C.event.touchstart),C.get.startEvent()&&F.on(C.get.startEvent()+E,C.event.start).on(C.get.endEvent()+E,C.event.end),w.target&&C.debug("Target set to element",j),l.on("resize"+y,C.event.resize)},popup:function(){C.verbose("Allowing hover events on popup to prevent closing"),r&&C.has.popup()&&r.on("mouseenter"+E,C.event.start).on("mouseleave"+E,C.event.end)},close:function(){(w.hideOnScroll===!0||"auto"==w.hideOnScroll&&"click"!=w.on)&&D.one(C.get.scrollEvent()+y,C.event.hideGracefully),"hover"==w.on&&I&&(C.verbose("Binding popup close event to document"),s.on("touchstart"+y,function(e){C.verbose("Touched away from popup"),C.event.hideGracefully.call(L,e)})),"click"==w.on&&w.closable&&(C.verbose("Binding popup close event to document"),s.on("click"+y,function(e){C.verbose("Clicked away from popup"),C.event.hideGracefully.call(L,e)}))}},unbind:{events:function(){l.off(y),F.off(E)},close:function(){s.off(y),D.off(y)}},has:{popup:function(){return r&&r.length>0}},is:{offstage:function(t,n){var i=[];return e.each(t,function(e,t){t<-w.jitter&&(C.debug("Position exceeds allowable distance from edge",e,t,n),i.push(e))}),i.length>0},svg:function(e){return C.supports.svg()&&e instanceof SVGGraphicsElement},active:function(){return F.hasClass(S.active)},animating:function(){return r!==i&&r.hasClass(S.animating)},fluid:function(){return r!==i&&r.hasClass(S.fluid)},visible:function(){return r!==i&&r.hasClass(S.visible)},dropdown:function(){return F.hasClass(S.dropdown)},hidden:function(){return!C.is.visible()},rtl:function(){return"rtl"==F.css("direction")}},reset:function(){C.remove.visible(),w.preserve?e.fn.transition!==i&&r.transition("remove transition"):C.removePopup()},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,w,t);else{if(n===i)return w[t];w[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,C,t);else{if(n===i)return C[t];C[t]=n}},debug:function(){!w.silent&&w.debug&&(w.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,w.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!w.silent&&w.verbose&&w.debug&&(w.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,w.name+":"),C.verbose.apply(console,arguments)))},error:function(){w.silent||(C.error=Function.prototype.bind.call(console.error,console,w.name+":"),C.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;w.performance&&(t=(new Date).getTime(),i=f||t,n=t-i,f=t,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:L,"Execution Time":n})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var t=w.name+":",n=0;f=!1,clearTimeout(C.performance.timer),e.each(m,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",u&&(t+=" '"+u+"'"),(console.group!==i||console.table!==i)&&m.length>0&&(console.groupCollapsed(t),console.table?console.table(m):e.each(m,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(t,n,o){var r,s,l,c=N;return n=n||h,o=L||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},p?(N===i&&C.initialize(),C.invoke(g)):(N!==i&&N.invoke("destroy"),C.initialize())}),a!==i?a:this},e.fn.popup.settings={name:"Popup",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"popup",observeChanges:!0,onCreate:function(){},onRemove:function(){},onShow:function(){},onVisible:function(){},onHide:function(){},onUnplaceable:function(){},onHidden:function(){},on:"hover",boundary:t,addTouchEvents:!0,position:"top left",variation:"",movePopup:!0,target:!1,popup:!1,inline:!1,preserve:!1,hoverable:!1,content:!1,html:!1,title:!1,closable:!0,hideOnScroll:"auto",exclusive:!1,context:"body",scrollContext:t,prefer:"opposite",lastResort:!1,delay:{show:50,hide:70},setFluidWidth:!0,duration:200,transition:"scale",distanceAway:0,jitter:2,offset:0,maxSearchDepth:15,error:{invalidPosition:"The position you specified is not a valid position",cannotPlace:"Popup does not fit within the boundaries of the viewport",method:"The method you called is not defined.",noTransition:"This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>",notFound:"The target or popup you specified does not exist on the page"},metadata:{activator:"activator",content:"content",html:"html",offset:"offset",position:"position",title:"title",variation:"variation"},className:{active:"active",animating:"animating",dropdown:"dropdown",fluid:"fluid",loading:"loading",popup:"ui popup",position:"top left center bottom right",visible:"visible"},selector:{popup:".ui.popup"},templates:{escape:function(e){var t=/[&<>"'`]/g,n=/[&<>"'`]/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},o=function(e){return i[e]};return n.test(e)?e.replace(t,o):e},popup:function(t){var n="",o=e.fn.popup.settings.templates.escape;return typeof t!==i&&(typeof t.title!==i&&t.title&&(t.title=o(t.title),n+='<div class="header">'+t.title+"</div>"),typeof t.content!==i&&t.content&&(t.content=o(t.content),n+='<div class="content">'+t.content+"</div>")),n}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();e.fn.progress=function(t){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f,m=e.isPlainObject(t)?e.extend(!0,{},e.fn.progress.settings,t):e.extend({},e.fn.progress.settings),g=m.className,p=m.metadata,h=m.namespace,v=m.selector,b=m.error,y="."+h,x="module-"+h,C=e(this),w=e(this).find(v.bar),k=e(this).find(v.progress),S=e(this).find(v.label),T=this,A=C.data(x),R=!1;f={initialize:function(){f.debug("Initializing progress bar",m),f.set.duration(),f.set.transitionEvent(),f.read.metadata(),f.read.settings(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of progress",f),A=f,C.data(x,f)},destroy:function(){f.verbose("Destroying previous progress for",C),clearInterval(A.interval),f.remove.state(),C.removeData(x),A=i},reset:function(){f.remove.nextValue(),f.update.progress(0)},complete:function(){(f.percent===i||f.percent<100)&&(f.remove.progressPoll(),f.set.percent(100))},read:{metadata:function(){var e={percent:C.data(p.percent),total:C.data(p.total),value:C.data(p.value)};e.percent&&(f.debug("Current percent value set from metadata",e.percent),f.set.percent(e.percent)),e.total&&(f.debug("Total value set from metadata",e.total),f.set.total(e.total)),e.value&&(f.debug("Current value set from metadata",e.value),f.set.value(e.value),f.set.progress(e.value))},settings:function(){m.total!==!1&&(f.debug("Current total set in settings",m.total),f.set.total(m.total)),m.value!==!1&&(f.debug("Current value set in settings",m.value),f.set.value(m.value),f.set.progress(f.value)),m.percent!==!1&&(f.debug("Current percent set in settings",m.percent),f.set.percent(m.percent))}},bind:{transitionEnd:function(e){var t=f.get.transitionEnd();w.one(t+y,function(t){clearTimeout(f.failSafeTimer),e.call(this,t)}),f.failSafeTimer=setTimeout(function(){w.triggerHandler(t)},m.duration+m.failSafeDelay),f.verbose("Adding fail safe timer",f.timer)}},increment:function(e){var t,n,i;f.has.total()?(n=f.get.value(),e=e||1,i=n+e):(n=f.get.percent(),e=e||f.get.randomValue(),i=n+e,t=100,f.debug("Incrementing percentage by",n,i)),i=f.get.normalizedValue(i),f.set.progress(i)},decrement:function(e){var t,n,i=f.get.total();i?(t=f.get.value(),e=e||1,n=t-e,f.debug("Decrementing value by",e,t)):(t=f.get.percent(),e=e||f.get.randomValue(),n=t-e,f.debug("Decrementing percentage by",e,t)),n=f.get.normalizedValue(n),f.set.progress(n)},has:{progressPoll:function(){return f.progressPoll},total:function(){return f.get.total()!==!1}},get:{text:function(e){var t=f.value||0,n=f.total||0,i=R?f.get.displayPercent():f.percent||0,o=f.total>0?n-t:100-i;return e=e||"",e=e.replace("{value}",t).replace("{total}",n).replace("{left}",o).replace("{percent}",i),f.verbose("Adding variables to progress bar text",e),e},normalizedValue:function(e){if(e<0)return f.debug("Value cannot decrement below 0"),0;if(f.has.total()){if(e>f.total)return f.debug("Value cannot increment above total",f.total),f.total}else if(e>100)return f.debug("Value cannot increment above 100 percent"),100;return e},updateInterval:function(){return"auto"==m.updateInterval?m.duration:m.updateInterval},randomValue:function(){return f.debug("Generating random increment percentage"),Math.floor(Math.random()*m.random.max+m.random.min)},numericValue:function(e){return"string"==typeof e?""!==e.replace(/[^\d.]/g,"")&&+e.replace(/[^\d.]/g,""):e},transitionEnd:function(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(t.style[e]!==i)return o[e]},displayPercent:function(){var e=w.width(),t=C.width(),n=parseInt(w.css("min-width"),10),i=e>n?e/t*100:f.percent;return m.precision>0?Math.round(i*(10*m.precision))/(10*m.precision):Math.round(i)},percent:function(){return f.percent||0},value:function(){return f.nextValue||f.value||0},total:function(){return f.total||!1}},create:{progressPoll:function(){f.progressPoll=setTimeout(function(){f.update.toNextValue(),f.remove.progressPoll()},f.get.updateInterval())}},is:{complete:function(){return f.is.success()||f.is.warning()||f.is.error()},success:function(){return C.hasClass(g.success)},warning:function(){return C.hasClass(g.warning)},error:function(){return C.hasClass(g.error)},active:function(){return C.hasClass(g.active)},visible:function(){return C.is(":visible")}},remove:{progressPoll:function(){f.verbose("Removing progress poll timer"),f.progressPoll&&(clearTimeout(f.progressPoll),delete f.progressPoll)},nextValue:function(){f.verbose("Removing progress value stored for next update"),delete f.nextValue},state:function(){f.verbose("Removing stored state"),delete f.total,delete f.percent,delete f.value},active:function(){f.verbose("Removing active state"),C.removeClass(g.active)},success:function(){f.verbose("Removing success state"),C.removeClass(g.success)},warning:function(){f.verbose("Removing warning state"),C.removeClass(g.warning)},error:function(){f.verbose("Removing error state"),C.removeClass(g.error)}},set:{barWidth:function(e){e>100?f.error(b.tooHigh,e):e<0?f.error(b.tooLow,e):(w.css("width",e+"%"),C.attr("data-percent",parseInt(e,10)))},duration:function(e){e=e||m.duration,e="number"==typeof e?e+"ms":e,f.verbose("Setting progress bar transition duration",e),w.css({"transition-duration":e})},percent:function(e){e="string"==typeof e?+e.replace("%",""):e,e=m.precision>0?Math.round(e*(10*m.precision))/(10*m.precision):Math.round(e),f.percent=e,f.has.total()||(f.value=m.precision>0?Math.round(e/100*f.total*(10*m.precision))/(10*m.precision):Math.round(e/100*f.total*10)/10,m.limitValues&&(f.value=f.value>100?100:f.value<0?0:f.value)),f.set.barWidth(e),f.set.labelInterval(),f.set.labels(),m.onChange.call(T,e,f.value,f.total)},labelInterval:function(){var t=function(){f.verbose("Bar finished animating, removing continuous label updates"),clearInterval(f.interval),R=!1,f.set.labels()};clearInterval(f.interval),f.bind.transitionEnd(t),R=!0,f.interval=setInterval(function(){var t=e.contains(n.documentElement,T);t||(clearInterval(f.interval),R=!1),f.set.labels()},m.framerate)},labels:function(){f.verbose("Setting both bar progress and outer label text"),f.set.barLabel(),f.set.state()},label:function(e){e=e||"",e&&(e=f.get.text(e),f.verbose("Setting label to text",e),S.text(e))},state:function(e){e=e!==i?e:f.percent,100===e?m.autoSuccess&&!(f.is.warning()||f.is.error()||f.is.success())?(f.set.success(),f.debug("Automatically triggering success at 100%")):(f.verbose("Reached 100% removing active state"),f.remove.active(),f.remove.progressPoll()):e>0?(f.verbose("Adjusting active progress bar label",e),f.set.active()):(f.remove.active(),f.set.label(m.text.active))},barLabel:function(e){e!==i?k.text(f.get.text(e)):"ratio"==m.label&&f.total?(f.verbose("Adding ratio to bar label"),k.text(f.get.text(m.text.ratio))):"percent"==m.label&&(f.verbose("Adding percentage to bar label"),k.text(f.get.text(m.text.percent)))},active:function(e){e=e||m.text.active,f.debug("Setting active state"),m.showActivity&&!f.is.active()&&C.addClass(g.active),f.remove.warning(),f.remove.error(),f.remove.success(),e=m.onLabelUpdate("active",e,f.value,f.total),e&&f.set.label(e),f.bind.transitionEnd(function(){m.onActive.call(T,f.value,f.total)})},success:function(e){e=e||m.text.success||m.text.active,f.debug("Setting success state"),C.addClass(g.success),f.remove.active(),f.remove.warning(),f.remove.error(),f.complete(),m.text.success?(e=m.onLabelUpdate("success",e,f.value,f.total),f.set.label(e)):(e=m.onLabelUpdate("active",e,f.value,f.total),f.set.label(e)),f.bind.transitionEnd(function(){m.onSuccess.call(T,f.total)})},warning:function(e){e=e||m.text.warning,f.debug("Setting warning state"),C.addClass(g.warning),f.remove.active(),f.remove.success(),f.remove.error(),f.complete(),e=m.onLabelUpdate("warning",e,f.value,f.total),e&&f.set.label(e),f.bind.transitionEnd(function(){m.onWarning.call(T,f.value,f.total)})},error:function(e){e=e||m.text.error,f.debug("Setting error state"),C.addClass(g.error),f.remove.active(),f.remove.success(),f.remove.warning(),f.complete(),e=m.onLabelUpdate("error",e,f.value,f.total),e&&f.set.label(e),f.bind.transitionEnd(function(){m.onError.call(T,f.value,f.total)})},transitionEvent:function(){a=f.get.transitionEnd()},total:function(e){f.total=e},value:function(e){f.value=e},progress:function(e){f.has.progressPoll()?(f.debug("Updated within interval, setting next update to use new value",e),f.set.nextValue(e)):(f.debug("First update in progress update interval, immediately updating",e),f.update.progress(e),f.create.progressPoll())},nextValue:function(e){f.nextValue=e}},update:{toNextValue:function(){var e=f.nextValue;e&&(f.debug("Update interval complete using last updated value",e),f.update.progress(e),f.remove.nextValue())},progress:function(e){var t;e=f.get.numericValue(e),e===!1&&f.error(b.nonNumeric,e),e=f.get.normalizedValue(e),f.has.total()?(f.set.value(e),t=e/f.total*100,f.debug("Calculating percent complete from total",t),f.set.percent(t)):(t=e,f.debug("Setting value to exact percentage value",t),f.set.percent(t))}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:T,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;s=!1,clearTimeout(f.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=A;return n=n||d,a=T||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(f.error(b.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},u?(A===i&&f.initialize(),f.invoke(c)):(A!==i&&A.invoke("destroy"),f.initialize())}),o!==i?o:this},e.fn.progress.settings={name:"Progress",namespace:"progress",silent:!1,debug:!1,verbose:!1,performance:!0,random:{min:2,max:5},duration:300,updateInterval:"auto",autoSuccess:!0,showActivity:!0,limitValues:!0,label:"percent",precision:0,framerate:1e3/30,percent:!1,total:!1,value:!1,failSafeDelay:100,onLabelUpdate:function(e,t,n,i){return t},onChange:function(e,t,n){},onSuccess:function(e){},onActive:function(e,t){},onError:function(e,t){},onWarning:function(e,t){},error:{method:"The method you called is not defined.",nonNumeric:"Progress value is non numeric",tooHigh:"Value specified is above 100%",tooLow:"Value specified is below 0%"},regExp:{variable:/\{\$*[A-z0-9]+\}/g},metadata:{percent:"percent",total:"total",value:"value"},selector:{bar:"> .bar",label:"> .label",progress:".bar > .progress"},text:{active:!1,error:!1,success:!1,warning:!1,percent:"{percent}%",ratio:"{value} of {total}"},className:{active:"active",error:"error",success:"success",warning:"warning"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.rating=function(t){var n,o=e(this),a=o.selector||"",r=(new Date).getTime(),s=[],l=arguments[0],c="string"==typeof l,u=[].slice.call(arguments,1);return o.each(function(){var d,f,m=e.isPlainObject(t)?e.extend(!0,{},e.fn.rating.settings,t):e.extend({},e.fn.rating.settings),g=m.namespace,p=m.className,h=m.metadata,v=m.selector,b=(m.error,"."+g),y="module-"+g,x=this,C=e(this).data(y),w=e(this),k=w.find(v.icon);f={initialize:function(){f.verbose("Initializing rating module",m),0===k.length&&f.setup.layout(),m.interactive?f.enable():f.disable(),f.set.initialLoad(),f.set.rating(f.get.initialRating()),f.remove.initialLoad(),f.instantiate()},instantiate:function(){f.verbose("Instantiating module",m),C=f,w.data(y,f)},destroy:function(){f.verbose("Destroying previous instance",C),f.remove.events(),w.removeData(y)},refresh:function(){k=w.find(v.icon)},setup:{layout:function(){var t=f.get.maxRating(),n=e.fn.rating.settings.templates.icon(t);f.debug("Generating icon html dynamically"),w.html(n),f.refresh()}},event:{mouseenter:function(){var t=e(this);t.nextAll().removeClass(p.selected),w.addClass(p.selected),t.addClass(p.selected).prevAll().addClass(p.selected)},mouseleave:function(){w.removeClass(p.selected),k.removeClass(p.selected)},click:function(){var t=e(this),n=f.get.rating(),i=k.index(t)+1,o="auto"==m.clearable?1===k.length:m.clearable;o&&n==i?f.clearRating():f.set.rating(i)}},clearRating:function(){f.debug("Clearing current rating"),f.set.rating(0)},bind:{events:function(){f.verbose("Binding events"),w.on("mouseenter"+b,v.icon,f.event.mouseenter).on("mouseleave"+b,v.icon,f.event.mouseleave).on("click"+b,v.icon,f.event.click)}},remove:{events:function(){f.verbose("Removing events"),w.off(b)},initialLoad:function(){d=!1}},enable:function(){f.debug("Setting rating to interactive mode"),f.bind.events(),w.removeClass(p.disabled)},disable:function(){f.debug("Setting rating to read-only mode"),f.remove.events(),w.addClass(p.disabled)},is:{initialLoad:function(){return d}},get:{initialRating:function(){return w.data(h.rating)!==i?(w.removeData(h.rating),w.data(h.rating)):m.initialRating},maxRating:function(){return w.data(h.maxRating)!==i?(w.removeData(h.maxRating),w.data(h.maxRating)):m.maxRating},rating:function(){var e=k.filter("."+p.active).length;return f.verbose("Current rating retrieved",e),e}},set:{rating:function(e){var t=e-1>=0?e-1:0,n=k.eq(t);w.removeClass(p.selected),k.removeClass(p.selected).removeClass(p.active),e>0&&(f.verbose("Setting current rating to",e),n.prevAll().addBack().addClass(p.active)),f.is.initialLoad()||m.onRate.call(x,e)},initialLoad:function(){d=!0}},setting:function(t,n){if(f.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(n===i)return f[t];f[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,m.name+":"),f.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),f.verbose.apply(console,arguments)))},error:function(){m.silent||(f.error=Function.prototype.bind.call(console.error,console,m.name+":"),f.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=r||t,n=t-i,r=t,s.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:x,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=m.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(s,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",a&&(t+=" '"+a+"'"),o.length>1&&(t+=" ("+o.length+")"),(console.group!==i||console.table!==i)&&s.length>0&&(console.groupCollapsed(t),console.table?console.table(s):e.each(s,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),s=[]}},invoke:function(t,o,a){var r,s,l,c=C;return o=o||u,a=x||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,o):s!==i&&(l=s),e.isArray(n)?n.push(l):n!==i?n=[n,l]:l!==i&&(n=l),s}},c?(C===i&&f.initialize(),f.invoke(l)):(C!==i&&C.invoke("destroy"),f.initialize())}),n!==i?n:this},e.fn.rating.settings={name:"Rating",namespace:"rating",slent:!1,debug:!1,verbose:!1,performance:!0,initialRating:0,interactive:!0,maxRating:4,clearable:"auto",fireOnInit:!1,onRate:function(e){},error:{method:"The method you called is not defined",noMaximum:"No maximum rating specified. Cannot generate HTML automatically"},metadata:{rating:"rating",maxRating:"maxRating"},className:{active:"active",disabled:"disabled",selected:"selected",loading:"loading"},selector:{icon:".icon"},templates:{icon:function(e){for(var t=1,n="";t<=e;)n+='<i class="icon"></i>',t++;return n}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),
e.fn.search=function(o){var a,r=e(this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return e(this).each(function(){var m,g=e.isPlainObject(o)?e.extend(!0,{},e.fn.search.settings,o):e.extend({},e.fn.search.settings),p=g.className,h=g.metadata,v=g.regExp,b=g.fields,y=g.selector,x=g.error,C=g.namespace,w="."+C,k=C+"-module",S=e(this),T=S.find(y.prompt),A=S.find(y.searchButton),R=S.find(y.results),E=S.find(y.result),P=S.find(y.category),F=this,O=S.data(k),D=!1;m={initialize:function(){m.verbose("Initializing module"),m.determine.searchFields(),m.bind.events(),m.set.type(),m.create.results(),m.instantiate()},instantiate:function(){m.verbose("Storing instance of module",m),O=m,S.data(k,m)},destroy:function(){m.verbose("Destroying instance"),S.off(w).removeData(k)},refresh:function(){m.debug("Refreshing selector cache"),T=S.find(y.prompt),A=S.find(y.searchButton),P=S.find(y.category),R=S.find(y.results),E=S.find(y.result)},refreshResults:function(){R=S.find(y.results),E=S.find(y.result)},bind:{events:function(){m.verbose("Binding events to search"),g.automatic&&(S.on(m.get.inputEvent()+w,y.prompt,m.event.input),T.attr("autocomplete","off")),S.on("focus"+w,y.prompt,m.event.focus).on("blur"+w,y.prompt,m.event.blur).on("keydown"+w,y.prompt,m.handleKeyboard).on("click"+w,y.searchButton,m.query).on("mousedown"+w,y.results,m.event.result.mousedown).on("mouseup"+w,y.results,m.event.result.mouseup).on("click"+w,y.result,m.event.result.click)}},determine:{searchFields:function(){o&&o.searchFields!==i&&(g.searchFields=o.searchFields)}},event:{input:function(){clearTimeout(m.timer),m.timer=setTimeout(m.query,g.searchDelay)},focus:function(){m.set.focus(),m.has.minimumCharacters()&&(m.query(),m.can.show()&&m.showResults())},blur:function(e){var t=n.activeElement===this,i=function(){m.cancel.query(),m.remove.focus(),m.timer=setTimeout(m.hideResults,g.hideDelay)};t||(m.resultsClicked?(m.debug("Determining if user action caused search to close"),S.one("click.close"+w,y.results,function(e){return m.is.inMessage(e)||D?void T.focus():(D=!1,void(m.is.animating()||m.is.hidden()||i()))})):(m.debug("Input blurred without user action, closing results"),i()))},result:{mousedown:function(){m.resultsClicked=!0},mouseup:function(){m.resultsClicked=!1},click:function(n){m.debug("Search result selected");var i=e(this),o=i.find(y.title).eq(0),a=i.is("a[href]")?i:i.find("a[href]").eq(0),r=a.attr("href")||!1,s=a.attr("target")||!1,l=(o.html(),o.length>0&&o.text()),c=m.get.results(),u=i.data(h.result)||m.get.result(l,c);return e.isFunction(g.onSelect)&&g.onSelect.call(F,u,c)===!1?(m.debug("Custom onSelect callback cancelled default select action"),void(D=!0)):(m.hideResults(),l&&m.set.value(l),void(r&&(m.verbose("Opening search link found in result",a),"_blank"==s||n.ctrlKey?t.open(r):t.location.href=r)))}}},handleKeyboard:function(e){var t,n=S.find(y.result),i=S.find(y.category),o=n.filter("."+p.active),a=n.index(o),r=n.length,s=o.length>0,l=e.which,c={backspace:8,enter:13,escape:27,upArrow:38,downArrow:40};if(l==c.escape&&(m.verbose("Escape key pressed, blurring search field"),m.trigger.blur()),m.is.visible())if(l==c.enter){if(m.verbose("Enter key pressed, selecting active result"),n.filter("."+p.active).length>0)return m.event.result.click.call(n.filter("."+p.active),e),e.preventDefault(),!1}else l==c.upArrow&&s?(m.verbose("Up key pressed, changing active result"),t=a-1<0?a:a-1,i.removeClass(p.active),n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active),e.preventDefault()):l==c.downArrow&&(m.verbose("Down key pressed, changing active result"),t=a+1>=r?a:a+1,i.removeClass(p.active),n.removeClass(p.active).eq(t).addClass(p.active).closest(i).addClass(p.active),e.preventDefault());else l==c.enter&&(m.verbose("Enter key pressed, executing query"),m.query(),m.set.buttonPressed(),T.one("keyup",m.remove.buttonFocus))},setup:{api:function(t){var n={debug:g.debug,on:!1,cache:!0,action:"search",urlData:{query:t},onSuccess:function(e){m.parse.response.call(F,e,t)},onAbort:function(e){},onFailure:function(){m.displayMessage(x.serverError)},onError:m.error};e.extend(!0,n,g.apiSettings),m.verbose("Setting up API request",n),S.api(n)}},can:{useAPI:function(){return e.fn.api!==i},show:function(){return m.is.focused()&&!m.is.visible()&&!m.is.empty()},transition:function(){return g.transition&&e.fn.transition!==i&&S.transition("is supported")}},is:{animating:function(){return R.hasClass(p.animating)},hidden:function(){return R.hasClass(p.hidden)},inMessage:function(t){if(t.target){var i=e(t.target),o=e.contains(n.documentElement,t.target);return o&&i.closest(y.message).length>0}},empty:function(){return""===R.html()},visible:function(){return R.filter(":visible").length>0},focused:function(){return T.filter(":focus").length>0}},trigger:{blur:function(){var e=n.createEvent("HTMLEvents"),t=T[0];t&&(m.verbose("Triggering native blur event"),e.initEvent("blur",!1,!1),t.dispatchEvent(e))}},get:{inputEvent:function(){var e=T[0],t=e!==i&&e.oninput!==i?"input":e!==i&&e.onpropertychange!==i?"propertychange":"keyup";return t},value:function(){return T.val()},results:function(){var e=S.data(h.results);return e},result:function(t,n){var o=["title","id"],a=!1;return t=t!==i?t:m.get.value(),n=n!==i?n:m.get.results(),"category"===g.type?(m.debug("Finding result that matches",t),e.each(n,function(n,i){if(e.isArray(i.results)&&(a=m.search.object(t,i.results,o)[0]))return!1})):(m.debug("Finding result in results object",t),a=m.search.object(t,n,o)[0]),a||!1}},select:{firstResult:function(){m.verbose("Selecting first result"),E.first().addClass(p.active)}},set:{focus:function(){S.addClass(p.focus)},loading:function(){S.addClass(p.loading)},value:function(e){m.verbose("Setting search input value",e),T.val(e)},type:function(e){e=e||g.type,"category"==g.type&&S.addClass(g.type)},buttonPressed:function(){A.addClass(p.pressed)}},remove:{loading:function(){S.removeClass(p.loading)},focus:function(){S.removeClass(p.focus)},buttonPressed:function(){A.removeClass(p.pressed)}},query:function(){var t=m.get.value(),n=m.read.cache(t);m.has.minimumCharacters()?(n?(m.debug("Reading result from cache",t),m.save.results(n.results),m.addResults(n.html),m.inject.id(n.results)):(m.debug("Querying for",t),e.isPlainObject(g.source)||e.isArray(g.source)?m.search.local(t):m.can.useAPI()?m.search.remote(t):m.error(x.source)),g.onSearchQuery.call(F,t)):m.hideResults()},search:{local:function(e){var t,n=m.search.object(e,g.content);m.set.loading(),m.save.results(n),m.debug("Returned local search results",n),t=m.generateResults({results:n}),m.remove.loading(),m.addResults(t),m.inject.id(n),m.write.cache(e,{html:t,results:n})},remote:function(e){S.api("is loading")&&S.api("abort"),m.setup.api(e),S.api("query")},object:function(t,n,o){var a=[],r=[],s=t.toString().replace(v.escape,"\\$&"),l=new RegExp(v.beginsWith+s,"i"),c=function(t,n){var i=e.inArray(n,a)==-1,o=e.inArray(n,r)==-1;i&&o&&t.push(n)};return n=n||g.source,o=o!==i?o:g.searchFields,e.isArray(o)||(o=[o]),n===i||n===!1?(m.error(x.source),[]):(e.each(o,function(i,o){e.each(n,function(e,n){var i="string"==typeof n[o];i&&(n[o].search(l)!==-1?c(a,n):g.searchFullText&&m.fuzzySearch(t,n[o])&&c(r,n))})}),e.merge(a,r))}},fuzzySearch:function(e,t){var n=t.length,i=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),i>n)return!1;if(i===n)return e===t;e:for(var o=0,a=0;o<i;o++){for(var r=e.charCodeAt(o);a<n;)if(t.charCodeAt(a++)===r)continue e;return!1}return!0},parse:{response:function(e,t){var n=m.generateResults(e);m.verbose("Parsing server response",e),e!==i&&t!==i&&e[b.results]!==i&&(m.addResults(n),m.inject.id(e[b.results]),m.write.cache(t,{html:n,results:e[b.results]}),m.save.results(e[b.results]))}},cancel:{query:function(){m.can.useAPI()&&S.api("abort")}},has:{minimumCharacters:function(){var e=m.get.value(),t=e.length;return t>=g.minCharacters}},clear:{cache:function(e){var t=S.data(h.cache);e?e&&t&&t[e]&&(m.debug("Removing value from cache",e),delete t[e],S.data(h.cache,t)):(m.debug("Clearing cache",e),S.removeData(h.cache))}},read:{cache:function(e){var t=S.data(h.cache);return!!g.cache&&(m.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==i&&t[e])}},create:{id:function(e,t){var n,o,a=e+1;return t!==i?(n=String.fromCharCode(97+t),o=n+a,m.verbose("Creating category result id",o)):(o=a,m.verbose("Creating result id",o)),o},results:function(){0===R.length&&(R=e("<div />").addClass(p.results).appendTo(S))}},inject:{result:function(e,t,n){m.verbose("Injecting result into results");var o=n!==i?R.children().eq(n).children(y.result).eq(t):R.children(y.result).eq(t);m.verbose("Injecting results metadata",o),o.data(h.result,e)},id:function(t){m.debug("Injecting unique ids into results");var n=0,o=0;return"category"===g.type?e.each(t,function(t,a){o=0,e.each(a.results,function(e,t){var r=a.results[e];r.id===i&&(r.id=m.create.id(o,n)),m.inject.result(r,o,n),o++}),n++}):e.each(t,function(e,n){var a=t[e];a.id===i&&(a.id=m.create.id(o)),m.inject.result(a,o),o++}),t}},save:{results:function(e){m.verbose("Saving current search results to metadata",e),S.data(h.results,e)}},write:{cache:function(e,t){var n=S.data(h.cache)!==i?S.data(h.cache):{};g.cache&&(m.verbose("Writing generated html to cache",e,t),n[e]=t,S.data(h.cache,n))}},addResults:function(t){return e.isFunction(g.onResultsAdd)&&g.onResultsAdd.call(R,t)===!1?(m.debug("onResultsAdd callback cancelled default action"),!1):void(t?(R.html(t),m.refreshResults(),g.selectFirstResult&&m.select.firstResult(),m.showResults()):m.hideResults())},showResults:function(){m.is.visible()||(m.can.transition()?(m.debug("Showing results with css animations"),R.transition({animation:g.transition+" in",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0})):(m.debug("Showing results with javascript"),R.stop().fadeIn(g.duration,g.easing)),g.onResultsOpen.call(R))},hideResults:function(){m.is.visible()&&(m.can.transition()?(m.debug("Hiding results with css animations"),R.transition({animation:g.transition+" out",debug:g.debug,verbose:g.verbose,duration:g.duration,queue:!0})):(m.debug("Hiding results with javascript"),R.stop().fadeOut(g.duration,g.easing)),g.onResultsClose.call(R))},generateResults:function(t){m.debug("Generating html from response",t);var n=g.templates[g.type],i=e.isPlainObject(t[b.results])&&!e.isEmptyObject(t[b.results]),o=e.isArray(t[b.results])&&t[b.results].length>0,a="";return i||o?(g.maxResults>0&&(i?"standard"==g.type&&m.error(x.maxResults):t[b.results]=t[b.results].slice(0,g.maxResults)),e.isFunction(n)?a=n(t,b):m.error(x.noTemplate,!1)):g.showNoResults&&(a=m.displayMessage(x.noResults,"empty")),g.onResults.call(F,t),a},displayMessage:function(e,t){return t=t||"standard",m.debug("Displaying message",e,t),m.addResults(g.templates.message(e,t)),g.templates.message(e,t)},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];m[t]=n}},debug:function(){!g.silent&&g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){!g.silent&&g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){g.silent||(m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;g.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":n})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,500)},display:function(){var t=g.name+":",n=0;l=!1,clearTimeout(m.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),r.length>1&&(t+=" ("+r.length+")"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=O;return n=n||f,o=F||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(O===i&&m.initialize(),m.invoke(u)):(O!==i&&O.invoke("destroy"),m.initialize())}),a!==i?a:this},e.fn.search.settings={name:"Search",namespace:"search",silent:!1,debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,selectFirstResult:!1,apiSettings:!1,source:!1,searchFields:["title","description"],displayField:"",searchFullText:!0,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,showNoResults:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(e){},onResults:function(e){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",message:".results > .message",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e){var t=/[&<>"'`]/g,n=/[&<>"'`]/,i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},o=function(e){return i[e]};return n.test(e)?e.replace(t,o):e},message:function(e,t){var n="";return e!==i&&t!==i&&(n+='<div class="message '+t+'">',n+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",n+="</div>"),n},category:function(t,n){var o="";e.fn.search.settings.templates.escape;return t[n.categoryResults]!==i&&(e.each(t[n.categoryResults],function(t,a){a[n.results]!==i&&a.results.length>0&&(o+='<div class="category">',a[n.categoryName]!==i&&(o+='<div class="name">'+a[n.categoryName]+"</div>"),e.each(a.results,function(e,t){o+=t[n.url]?'<a class="result" href="'+t[n.url]+'">':'<a class="result">',t[n.image]!==i&&(o+='<div class="image"> <img src="'+t[n.image]+'"></div>'),o+='<div class="content">',t[n.price]!==i&&(o+='<div class="price">'+t[n.price]+"</div>"),t[n.title]!==i&&(o+='<div class="title">'+t[n.title]+"</div>"),t[n.description]!==i&&(o+='<div class="description">'+t[n.description]+"</div>"),o+="</div>",o+="</a>"}),o+="</div>")}),t[n.action]&&(o+='<a href="'+t[n.action][n.actionURL]+'" class="action">'+t[n.action][n.actionText]+"</a>"),o)},standard:function(t,n){var o="";return t[n.results]!==i&&(e.each(t[n.results],function(e,t){o+=t[n.url]?'<a class="result" href="'+t[n.url]+'">':'<a class="result">',t[n.image]!==i&&(o+='<div class="image"> <img src="'+t[n.image]+'"></div>'),o+='<div class="content">',t[n.price]!==i&&(o+='<div class="price">'+t[n.price]+"</div>"),t[n.title]!==i&&(o+='<div class="title">'+t[n.title]+"</div>"),t[n.description]!==i&&(o+='<div class="description">'+t[n.description]+"</div>"),o+="</div>",o+="</a>"}),t[n.action]&&(o+='<a href="'+t[n.action][n.actionURL]+'" class="action">'+t[n.action][n.actionText]+"</a>"),o)}}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.shape=function(o){var a,r=e(this),s=(e("body"),(new Date).getTime()),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1),f=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var t,m,g,p=r.selector||"",h=e.isPlainObject(o)?e.extend(!0,{},e.fn.shape.settings,o):e.extend({},e.fn.shape.settings),v=h.namespace,b=h.selector,y=h.error,x=h.className,C="."+v,w="module-"+v,k=e(this),S=k.find(b.sides),T=k.find(b.side),A=!1,R=this,E=k.data(w);g={initialize:function(){g.verbose("Initializing module for",R),g.set.defaultSide(),g.instantiate()},instantiate:function(){g.verbose("Storing instance of module",g),E=g,k.data(w,E)},destroy:function(){g.verbose("Destroying previous module for",R),k.removeData(w).off(C)},refresh:function(){g.verbose("Refreshing selector cache for",R),k=e(R),S=e(this).find(b.shape),T=e(this).find(b.side)},repaint:function(){g.verbose("Forcing repaint event");var e=S[0]||n.createElement("div");e.offsetWidth},animate:function(e,n){g.verbose("Animating box with properties",e),n=n||function(e){g.verbose("Executing animation callback"),e!==i&&e.stopPropagation(),g.reset(),g.set.active()},h.beforeChange.call(m[0]),g.get.transitionEvent()?(g.verbose("Starting CSS animation"),k.addClass(x.animating),S.css(e).one(g.get.transitionEvent(),n),g.set.duration(h.duration),f(function(){k.addClass(x.animating),t.addClass(x.hidden)})):n()},queue:function(e){g.debug("Queueing animation of",e),S.one(g.get.transitionEvent(),function(){g.debug("Executing queued animation"),setTimeout(function(){k.shape(e)},0)})},reset:function(){g.verbose("Animating states reset"),k.removeClass(x.animating).attr("style","").removeAttr("style"),S.attr("style","").removeAttr("style"),T.attr("style","").removeAttr("style").removeClass(x.hidden),m.removeClass(x.animating).attr("style","").removeAttr("style")},is:{complete:function(){return T.filter("."+x.active)[0]==m[0]},animating:function(){return k.hasClass(x.animating)}},set:{defaultSide:function(){t=k.find("."+h.className.active),m=t.next(b.side).length>0?t.next(b.side):k.find(b.side).first(),A=!1,g.verbose("Active side set to",t),g.verbose("Next side set to",m)},duration:function(e){e=e||h.duration,e="number"==typeof e?e+"ms":e,g.verbose("Setting animation duration",e),(h.duration||0===h.duration)&&S.add(T).css({"-webkit-transition-duration":e,"-moz-transition-duration":e,"-ms-transition-duration":e,"-o-transition-duration":e,"transition-duration":e})},currentStageSize:function(){var e=k.find("."+h.className.active),t=e.outerWidth(!0),n=e.outerHeight(!0);k.css({width:t,height:n})},stageSize:function(){var e=k.clone().addClass(x.loading),t=e.find("."+h.className.active),n=A?e.find(b.side).eq(A):t.next(b.side).length>0?t.next(b.side):e.find(b.side).first(),i="next"==h.width?n.outerWidth(!0):"initial"==h.width?k.width():h.width,o="next"==h.height?n.outerHeight(!0):"initial"==h.height?k.height():h.height;t.removeClass(x.active),n.addClass(x.active),e.insertAfter(k),e.remove(),"auto"!=h.width&&(k.css("width",i+h.jitter),g.verbose("Specifying width during animation",i)),"auto"!=h.height&&(k.css("height",o+h.jitter),g.verbose("Specifying height during animation",o))},nextSide:function(e){A=e,m=T.filter(e),A=T.index(m),0===m.length&&(g.set.defaultSide(),g.error(y.side)),g.verbose("Next side manually set to",m)},active:function(){g.verbose("Setting new side to active",m),T.removeClass(x.active),m.addClass(x.active),h.onChange.call(m[0]),g.set.defaultSide()}},flip:{up:function(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip up");else{g.debug("Flipping up",m);var e=g.get.transform.up();g.set.stageSize(),g.stage.above(),g.animate(e)}},down:function(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip down");else{g.debug("Flipping down",m);var e=g.get.transform.down();g.set.stageSize(),g.stage.below(),g.animate(e)}},left:function(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip left");else{g.debug("Flipping left",m);var e=g.get.transform.left();g.set.stageSize(),g.stage.left(),g.animate(e)}},right:function(){if(g.is.complete()&&!g.is.animating()&&!h.allowRepeats)return void g.debug("Side already visible",m);if(g.is.animating())g.queue("flip right");else{g.debug("Flipping right",m);var e=g.get.transform.right();g.set.stageSize(),g.stage.right(),g.animate(e)}},over:function(){return!g.is.complete()||g.is.animating()||h.allowRepeats?void(g.is.animating()?g.queue("flip over"):(g.debug("Flipping over",m),g.set.stageSize(),g.stage.behind(),g.animate(g.get.transform.over()))):void g.debug("Side already visible",m)},back:function(){return!g.is.complete()||g.is.animating()||h.allowRepeats?void(g.is.animating()?g.queue("flip back"):(g.debug("Flipping back",m),g.set.stageSize(),g.stage.behind(),g.animate(g.get.transform.back()))):void g.debug("Side already visible",m)}},get:{transform:{up:function(){var e={y:-((t.outerHeight(!0)-m.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(-90deg)"}},down:function(){var e={y:-((t.outerHeight(!0)-m.outerHeight(!0))/2),z:-(t.outerHeight(!0)/2)};return{transform:"translateY("+e.y+"px) translateZ("+e.z+"px) rotateX(90deg)"}},left:function(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(90deg)"}},right:function(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2),z:-(t.outerWidth(!0)/2)};return{transform:"translateX("+e.x+"px) translateZ("+e.z+"px) rotateY(-90deg)"}},over:function(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(180deg)"}},back:function(){var e={x:-((t.outerWidth(!0)-m.outerWidth(!0))/2)};return{transform:"translateX("+e.x+"px) rotateY(-180deg)"}}},transitionEvent:function(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(t.style[e]!==i)return o[e]},nextSide:function(){return t.next(b.side).length>0?t.next(b.side):k.find(b.side).first()}},stage:{above:function(){var e={origin:(t.outerHeight(!0)-m.outerHeight(!0))/2,depth:{active:m.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};g.verbose("Setting the initial animation position as above",m,e),S.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),m.addClass(x.animating).css({top:e.origin+"px",transform:"rotateX(90deg) translateZ("+e.depth.next+"px)"})},below:function(){var e={origin:(t.outerHeight(!0)-m.outerHeight(!0))/2,depth:{active:m.outerHeight(!0)/2,next:t.outerHeight(!0)/2}};g.verbose("Setting the initial animation position as below",m,e),S.css({transform:"translateZ(-"+e.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+e.depth.active+"px)"}),m.addClass(x.animating).css({top:e.origin+"px",transform:"rotateX(-90deg) translateZ("+e.depth.next+"px)"})},left:function(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as left",m,n),S.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(-90deg) translateZ("+n.depth.next+"px)"})},right:function(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as left",m,n),S.css({transform:"translateZ(-"+n.depth.active+"px)"}),t.css({transform:"rotateY(0deg) translateZ("+n.depth.active+"px)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(90deg) translateZ("+n.depth.next+"px)"})},behind:function(){var e={active:t.outerWidth(!0),next:m.outerWidth(!0)},n={origin:(e.active-e.next)/2,depth:{active:e.next/2,next:e.active/2}};g.verbose("Setting the initial animation position as behind",m,n),t.css({transform:"rotateY(0deg)"}),m.addClass(x.animating).css({left:n.origin+"px",transform:"rotateY(-180deg)"})}},setting:function(t,n){if(g.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];e.isPlainObject(h[t])?e.extend(!0,h[t],n):h[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,g,t);else{if(n===i)return g[t];g[t]=n}},debug:function(){!h.silent&&h.debug&&(h.performance?g.performance.log(arguments):(g.debug=Function.prototype.bind.call(console.info,console,h.name+":"),g.debug.apply(console,arguments)))},verbose:function(){!h.silent&&h.verbose&&h.debug&&(h.performance?g.performance.log(arguments):(g.verbose=Function.prototype.bind.call(console.info,console,h.name+":"),g.verbose.apply(console,arguments)))},error:function(){h.silent||(g.error=Function.prototype.bind.call(console.error,console,h.name+":"),g.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;h.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:R,"Execution Time":n})),clearTimeout(g.performance.timer),g.performance.timer=setTimeout(g.performance.display,500)},display:function(){var t=h.name+":",n=0;s=!1,clearTimeout(g.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",p&&(t+=" '"+p+"'"),r.length>1&&(t+=" ("+r.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,o){var r,s,l,c=E;return n=n||d,o=R||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},u?(E===i&&g.initialize(),g.invoke(c)):(E!==i&&E.invoke("destroy"),g.initialize())}),a!==i?a:this},e.fn.shape.settings={name:"Shape",silent:!1,debug:!1,verbose:!1,jitter:0,performance:!0,namespace:"shape",width:"initial",height:"initial",beforeChange:function(){},onChange:function(){},allowRepeats:!1,duration:!1,error:{side:"You tried to switch to a side that does not exist.",method:"The method you called is not defined"},className:{animating:"animating",hidden:"hidden",loading:"loading",active:"active"},selector:{sides:".sides",side:".side"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sidebar=function(o){var a,r=e(this),s=e(t),l=e(n),c=e("html"),u=e("head"),d=r.selector||"",f=(new Date).getTime(),m=[],g=arguments[0],p="string"==typeof g,h=[].slice.call(arguments,1),v=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return r.each(function(){var r,b,y,x,C,w,k=e.isPlainObject(o)?e.extend(!0,{},e.fn.sidebar.settings,o):e.extend({},e.fn.sidebar.settings),S=k.selector,T=k.className,A=k.namespace,R=k.regExp,E=k.error,P="."+A,F="module-"+A,O=e(this),D=e(k.context),q=O.children(S.sidebar),j=D.children(S.fixed),z=D.children(S.pusher),M=this,I=O.data(F);w={initialize:function(){w.debug("Initializing sidebar",o),w.create.id(),C=w.get.transitionEvent(),w.is.ios()&&w.set.ios(),k.delaySetup?v(w.setup.layout):w.setup.layout(),v(function(){w.setup.cache()}),w.instantiate()},instantiate:function(){w.verbose("Storing instance of module",w),I=w,O.data(F,w)},create:{id:function(){y=(Math.random().toString(16)+"000000000").substr(2,8),b="."+y,w.verbose("Creating unique id for element",y)}},destroy:function(){w.verbose("Destroying previous module for",O),O.off(P).removeData(F),w.is.ios()&&w.remove.ios(),D.off(b),s.off(b),l.off(b)},event:{clickaway:function(e){var t=z.find(e.target).length>0||z.is(e.target),n=D.is(e.target);t&&(w.verbose("User clicked on dimmed page"),w.hide()),n&&(w.verbose("User clicked on dimmable context (scaled out page)"),w.hide())},touch:function(e){},containScroll:function(e){M.scrollTop<=0&&(M.scrollTop=1),M.scrollTop+M.offsetHeight>=M.scrollHeight&&(M.scrollTop=M.scrollHeight-M.offsetHeight-1)},scroll:function(t){0===e(t.target).closest(S.sidebar).length&&t.preventDefault()}},bind:{clickaway:function(){w.verbose("Adding clickaway events to context",D),k.closable&&D.on("click"+b,w.event.clickaway).on("touchend"+b,w.event.clickaway)},scrollLock:function(){k.scrollLock&&(w.debug("Disabling page scroll"),s.on("DOMMouseScroll"+b,w.event.scroll)),w.verbose("Adding events to contain sidebar scroll"),l.on("touchmove"+b,w.event.touch),O.on("scroll"+P,w.event.containScroll)}},unbind:{clickaway:function(){w.verbose("Removing clickaway events from context",D),D.off(b)},scrollLock:function(){w.verbose("Removing scroll lock from page"),l.off(b),s.off(b),O.off("scroll"+P)}},add:{inlineCSS:function(){var t,n=w.cache.width||O.outerWidth(),i=w.cache.height||O.outerHeight(),o=w.is.rtl(),a=w.get.direction(),s={left:n,right:-n,top:i,bottom:-i};o&&(w.verbose("RTL detected, flipping widths"),s.left=-n,s.right=n),t="<style>","left"===a||"right"===a?(w.debug("Adding CSS rules for animation distance",n),t+=" .ui.visible."+a+".sidebar ~ .fixed, .ui.visible."+a+".sidebar ~ .pusher {   -webkit-transform: translate3d("+s[a]+"px, 0, 0);           transform: translate3d("+s[a]+"px, 0, 0); }"):"top"!==a&&"bottom"!=a||(t+=" .ui.visible."+a+".sidebar ~ .fixed, .ui.visible."+a+".sidebar ~ .pusher {   -webkit-transform: translate3d(0, "+s[a]+"px, 0);           transform: translate3d(0, "+s[a]+"px, 0); }"),w.is.ie()&&("left"===a||"right"===a?(w.debug("Adding CSS rules for animation distance",n),t+=" body.pushable > .ui.visible."+a+".sidebar ~ .pusher:after {   -webkit-transform: translate3d("+s[a]+"px, 0, 0);           transform: translate3d("+s[a]+"px, 0, 0); }"):"top"!==a&&"bottom"!=a||(t+=" body.pushable > .ui.visible."+a+".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, "+s[a]+"px, 0);           transform: translate3d(0, "+s[a]+"px, 0); }"),t+=" body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),t+="</style>",r=e(t).appendTo(u),w.debug("Adding sizing css to head",r)}},refresh:function(){w.verbose("Refreshing selector cache"),D=e(k.context),q=D.children(S.sidebar),z=D.children(S.pusher),j=D.children(S.fixed),w.clear.cache()},refreshSidebars:function(){w.verbose("Refreshing other sidebars"),q=D.children(S.sidebar)},repaint:function(){w.verbose("Forcing repaint event"),M.style.display="none";M.offsetHeight;M.scrollTop=M.scrollTop,M.style.display=""},setup:{cache:function(){
w.cache={width:O.outerWidth(),height:O.outerHeight(),rtl:"rtl"==O.css("direction")}},layout:function(){0===D.children(S.pusher).length&&(w.debug("Adding wrapper element for sidebar"),w.error(E.pusher),z=e('<div class="pusher" />'),D.children().not(S.omitted).not(q).wrapAll(z),w.refresh()),0!==O.nextAll(S.pusher).length&&O.nextAll(S.pusher)[0]===z[0]||(w.debug("Moved sidebar to correct parent element"),w.error(E.movedSidebar,M),O.detach().prependTo(D),w.refresh()),w.clear.cache(),w.set.pushable(),w.set.direction()}},attachEvents:function(t,n){var i=e(t);n=e.isFunction(w[n])?w[n]:w.toggle,i.length>0?(w.debug("Attaching sidebar events to element",t,n),i.on("click"+P,n)):w.error(E.notFound,t)},show:function(t){if(t=e.isFunction(t)?t:function(){},w.is.hidden()){if(w.refreshSidebars(),k.overlay&&(w.error(E.overlay),k.transition="overlay"),w.refresh(),w.othersActive())if(w.debug("Other sidebars currently visible"),k.exclusive){if("overlay"!=k.transition)return void w.hideOthers(w.show);w.hideOthers()}else k.transition="overlay";w.pushPage(function(){t.call(M),k.onShow.call(M)}),k.onChange.call(M),k.onVisible.call(M)}else w.debug("Sidebar is already visible")},hide:function(t){t=e.isFunction(t)?t:function(){},(w.is.visible()||w.is.animating())&&(w.debug("Hiding sidebar",t),w.refreshSidebars(),w.pullPage(function(){t.call(M),k.onHidden.call(M)}),k.onChange.call(M),k.onHide.call(M))},othersAnimating:function(){return q.not(O).filter("."+T.animating).length>0},othersVisible:function(){return q.not(O).filter("."+T.visible).length>0},othersActive:function(){return w.othersVisible()||w.othersAnimating()},hideOthers:function(e){var t=q.not(O).filter("."+T.visible),n=t.length,i=0;e=e||function(){},t.sidebar("hide",function(){i++,i==n&&e()})},toggle:function(){w.verbose("Determining toggled direction"),w.is.hidden()?w.show():w.hide()},pushPage:function(t){var n,i,o,a=w.get.transition(),r="overlay"===a||w.othersActive()?O:z;t=e.isFunction(t)?t:function(){},"scale down"==k.transition&&w.scrollToTop(),w.set.transition(a),w.repaint(),n=function(){w.bind.clickaway(),w.add.inlineCSS(),w.set.animating(),w.set.visible()},i=function(){w.set.dimmed()},o=function(e){e.target==r[0]&&(r.off(C+b,o),w.remove.animating(),w.bind.scrollLock(),t.call(M))},r.off(C+b),r.on(C+b,o),v(n),k.dimPage&&!w.othersVisible()&&v(i)},pullPage:function(t){var n,i,o=w.get.transition(),a="overlay"==o||w.othersActive()?O:z;t=e.isFunction(t)?t:function(){},w.verbose("Removing context push state",w.get.direction()),w.unbind.clickaway(),w.unbind.scrollLock(),n=function(){w.set.transition(o),w.set.animating(),w.remove.visible(),k.dimPage&&!w.othersVisible()&&z.removeClass(T.dimmed)},i=function(e){e.target==a[0]&&(a.off(C+b,i),w.remove.animating(),w.remove.transition(),w.remove.inlineCSS(),("scale down"==o||k.returnScroll&&w.is.mobile())&&w.scrollBack(),t.call(M))},a.off(C+b),a.on(C+b,i),v(n)},scrollToTop:function(){w.verbose("Scrolling to top of page to avoid animation issues"),x=e(t).scrollTop(),O.scrollTop(0),t.scrollTo(0,0)},scrollBack:function(){w.verbose("Scrolling back to original page position"),t.scrollTo(0,x)},clear:{cache:function(){w.verbose("Clearing cached dimensions"),w.cache={}}},set:{ios:function(){c.addClass(T.ios)},pushed:function(){D.addClass(T.pushed)},pushable:function(){D.addClass(T.pushable)},dimmed:function(){z.addClass(T.dimmed)},active:function(){O.addClass(T.active)},animating:function(){O.addClass(T.animating)},transition:function(e){e=e||w.get.transition(),O.addClass(e)},direction:function(e){e=e||w.get.direction(),O.addClass(T[e])},visible:function(){O.addClass(T.visible)},overlay:function(){O.addClass(T.overlay)}},remove:{inlineCSS:function(){w.debug("Removing inline css styles",r),r&&r.length>0&&r.remove()},ios:function(){c.removeClass(T.ios)},pushed:function(){D.removeClass(T.pushed)},pushable:function(){D.removeClass(T.pushable)},active:function(){O.removeClass(T.active)},animating:function(){O.removeClass(T.animating)},transition:function(e){e=e||w.get.transition(),O.removeClass(e)},direction:function(e){e=e||w.get.direction(),O.removeClass(T[e])},visible:function(){O.removeClass(T.visible)},overlay:function(){O.removeClass(T.overlay)}},get:{direction:function(){return O.hasClass(T.top)?T.top:O.hasClass(T.right)?T.right:O.hasClass(T.bottom)?T.bottom:T.left},transition:function(){var e,t=w.get.direction();return e=w.is.mobile()?"auto"==k.mobileTransition?k.defaultTransition.mobile[t]:k.mobileTransition:"auto"==k.transition?k.defaultTransition.computer[t]:k.transition,w.verbose("Determined transition",e),e},transitionEvent:function(){var e,t=n.createElement("element"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in o)if(t.style[e]!==i)return o[e]}},is:{ie:function(){var e=!t.ActiveXObject&&"ActiveXObject"in t,n="ActiveXObject"in t;return e||n},ios:function(){var e=navigator.userAgent,t=e.match(R.ios),n=e.match(R.mobileChrome);return!(!t||n)&&(w.verbose("Browser was found to be iOS",e),!0)},mobile:function(){var e=navigator.userAgent,t=e.match(R.mobile);return t?(w.verbose("Browser was found to be mobile",e),!0):(w.verbose("Browser is not mobile, using regular transition",e),!1)},hidden:function(){return!w.is.visible()},visible:function(){return O.hasClass(T.visible)},open:function(){return w.is.visible()},closed:function(){return w.is.hidden()},vertical:function(){return O.hasClass(T.top)},animating:function(){return D.hasClass(T.animating)},rtl:function(){return w.cache.rtl===i&&(w.cache.rtl="rtl"==O.css("direction")),w.cache.rtl}},setting:function(t,n){if(w.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,k,t);else{if(n===i)return k[t];e.isPlainObject(k[t])?e.extend(!0,k[t],n):k[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,w,t);else{if(n===i)return w[t];w[t]=n}},debug:function(){!k.silent&&k.debug&&(k.performance?w.performance.log(arguments):(w.debug=Function.prototype.bind.call(console.info,console,k.name+":"),w.debug.apply(console,arguments)))},verbose:function(){!k.silent&&k.verbose&&k.debug&&(k.performance?w.performance.log(arguments):(w.verbose=Function.prototype.bind.call(console.info,console,k.name+":"),w.verbose.apply(console,arguments)))},error:function(){k.silent||(w.error=Function.prototype.bind.call(console.error,console,k.name+":"),w.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;k.performance&&(t=(new Date).getTime(),i=f||t,n=t-i,f=t,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:M,"Execution Time":n})),clearTimeout(w.performance.timer),w.performance.timer=setTimeout(w.performance.display,500)},display:function(){var t=k.name+":",n=0;f=!1,clearTimeout(w.performance.timer),e.each(m,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",d&&(t+=" '"+d+"'"),(console.group!==i||console.table!==i)&&m.length>0&&(console.groupCollapsed(t),console.table?console.table(m):e.each(m,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(t,n,o){var r,s,l,c=I;return n=n||h,o=M||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(w.error(E.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},p?(I===i&&w.initialize(),w.invoke(g)):(I!==i&&w.invoke("destroy"),w.initialize())}),a!==i?a:this},e.fn.sidebar.settings={name:"Sidebar",namespace:"sidebar",silent:!1,debug:!1,verbose:!1,performance:!0,transition:"auto",mobileTransition:"auto",defaultTransition:{computer:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"},mobile:{left:"uncover",right:"uncover",top:"overlay",bottom:"overlay"}},context:"body",exclusive:!1,closable:!0,dimPage:!0,scrollLock:!1,returnScroll:!1,delaySetup:!1,duration:500,onChange:function(){},onShow:function(){},onHide:function(){},onHidden:function(){},onVisible:function(){},className:{active:"active",animating:"animating",dimmed:"dimmed",ios:"ios",pushable:"pushable",pushed:"pushed",right:"right",top:"top",left:"left",bottom:"bottom",visible:"visible"},selector:{fixed:".fixed",omitted:"script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",pusher:".pusher",sidebar:".ui.sidebar"},regExp:{ios:/(iPad|iPhone|iPod)/g,mobileChrome:/(CriOS)/g,mobile:/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g},error:{method:"The method you called is not defined.",pusher:"Had to add pusher element. For optimal performance make sure body content is inside a pusher element",movedSidebar:"Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",overlay:"The overlay setting is no longer supported, use animation: overlay",notFound:"There were no elements that matched the specified selector"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.sticky=function(o){var a,r=e(this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1);return r.each(function(){var r,m,g,p,h,v=e.isPlainObject(o)?e.extend(!0,{},e.fn.sticky.settings,o):e.extend({},e.fn.sticky.settings),b=v.className,y=v.namespace,x=v.error,C="."+y,w="module-"+y,k=e(this),S=e(t),T=e(v.scrollContext),A=(k.selector||"",k.data(w)),R=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},E=this;h={initialize:function(){h.determineContainer(),h.determineContext(),h.verbose("Initializing sticky",v,r),h.save.positions(),h.checkErrors(),h.bind.events(),v.observeChanges&&h.observeChanges(),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),A=h,k.data(w,h)},destroy:function(){h.verbose("Destroying previous instance"),h.reset(),g&&g.disconnect(),p&&p.disconnect(),S.off("load"+C,h.event.load).off("resize"+C,h.event.resize),T.off("scrollchange"+C,h.event.scrollchange),k.removeData(w)},observeChanges:function(){"MutationObserver"in t&&(g=new MutationObserver(h.event.documentChanged),p=new MutationObserver(h.event.changed),g.observe(n,{childList:!0,subtree:!0}),p.observe(E,{childList:!0,subtree:!0}),p.observe(m[0],{childList:!0,subtree:!0}),h.debug("Setting up mutation observer",p))},determineContainer:function(){r=v.container?e(v.container):k.offsetParent()},determineContext:function(){if(m=v.context?e(v.context):r,0===m.length)return void h.error(x.invalidContext,v.context,k)},checkErrors:function(){if(h.is.hidden()&&h.error(x.visible,k),h.cache.element.height>h.cache.context.height)return h.reset(),void h.error(x.elementSize,k)},bind:{events:function(){S.on("load"+C,h.event.load).on("resize"+C,h.event.resize),T.off("scroll"+C).on("scroll"+C,h.event.scroll).on("scrollchange"+C,h.event.scrollchange)}},event:{changed:function(e){clearTimeout(h.timer),h.timer=setTimeout(function(){h.verbose("DOM tree modified, updating sticky menu",e),h.refresh()},100)},documentChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==E||e(t).find(E).length>0)&&(h.debug("Element removed from DOM, tearing down events"),h.destroy())})})},load:function(){h.verbose("Page contents finished loading"),R(h.refresh)},resize:function(){h.verbose("Window resized"),R(h.refresh)},scroll:function(){R(function(){T.triggerHandler("scrollchange"+C,T.scrollTop())})},scrollchange:function(e,t){h.stick(t),v.onScroll.call(E)}},refresh:function(e){h.reset(),v.context||h.determineContext(),e&&h.determineContainer(),h.save.positions(),h.stick(),v.onReposition.call(E)},supports:{sticky:function(){var t=e("<div/>");t[0];return t.addClass(b.supported),t.css("position").match("sticky")}},save:{lastScroll:function(e){h.lastScroll=e},elementScroll:function(e){h.elementScroll=e},positions:function(){var e={height:T.height()},t={margin:{top:parseInt(k.css("margin-top"),10),bottom:parseInt(k.css("margin-bottom"),10)},offset:k.offset(),width:k.outerWidth(),height:k.outerHeight()},n={offset:m.offset(),height:m.outerHeight()};({height:r.outerHeight()});h.is.standardScroll()||(h.debug("Non-standard scroll. Removing scroll offset from element offset"),e.top=T.scrollTop(),e.left=T.scrollLeft(),t.offset.top+=e.top,n.offset.top+=e.top,t.offset.left+=e.left,n.offset.left+=e.left),h.cache={fits:t.height<e.height,scrollContext:{height:e.height},element:{margin:t.margin,top:t.offset.top-t.margin.top,left:t.offset.left,width:t.width,height:t.height,bottom:t.offset.top+t.height},context:{top:n.offset.top,height:n.height,bottom:n.offset.top+n.height}},h.set.containerSize(),h.set.size(),h.stick(),h.debug("Caching element positions",h.cache)}},get:{direction:function(e){var t="down";return e=e||T.scrollTop(),h.lastScroll!==i&&(h.lastScroll<e?t="down":h.lastScroll>e&&(t="up")),t},scrollChange:function(e){return e=e||T.scrollTop(),h.lastScroll?e-h.lastScroll:0},currentElementScroll:function(){return h.elementScroll?h.elementScroll:h.is.top()?Math.abs(parseInt(k.css("top"),10))||0:Math.abs(parseInt(k.css("bottom"),10))||0},elementScroll:function(e){e=e||T.scrollTop();var t=h.cache.element,n=h.cache.scrollContext,i=h.get.scrollChange(e),o=t.height-n.height+v.offset,a=h.get.currentElementScroll(),r=a+i;return a=h.cache.fits||r<0?0:r>o?o:r}},remove:{lastScroll:function(){delete h.lastScroll},elementScroll:function(e){delete h.elementScroll},offset:function(){k.css("margin-top","")}},set:{offset:function(){h.verbose("Setting offset on element",v.offset),k.css("margin-top",v.offset)},containerSize:function(){var e=r.get(0).tagName;"HTML"===e||"body"==e?h.determineContainer():Math.abs(r.outerHeight()-h.cache.context.height)>v.jitter&&(h.debug("Context has padding, specifying exact height for container",h.cache.context.height),r.css({height:h.cache.context.height}))},minimumSize:function(){var e=h.cache.element;r.css("min-height",e.height)},scroll:function(e){h.debug("Setting scroll on element",e),h.elementScroll!=e&&(h.is.top()&&k.css("bottom","").css("top",-e),h.is.bottom()&&k.css("top","").css("bottom",e))},size:function(){0!==h.cache.element.height&&0!==h.cache.element.width&&(E.style.setProperty("width",h.cache.element.width+"px","important"),E.style.setProperty("height",h.cache.element.height+"px","important"))}},is:{standardScroll:function(){return T[0]==t},top:function(){return k.hasClass(b.top)},bottom:function(){return k.hasClass(b.bottom)},initialPosition:function(){return!h.is.fixed()&&!h.is.bound()},hidden:function(){return!k.is(":visible")},bound:function(){return k.hasClass(b.bound)},fixed:function(){return k.hasClass(b.fixed)}},stick:function(e){var t=e||T.scrollTop(),n=h.cache,i=n.fits,o=n.element,a=n.scrollContext,r=n.context,s=h.is.bottom()&&v.pushing?v.bottomOffset:v.offset,e={top:t+s,bottom:t+s+a.height},l=(h.get.direction(e.top),i?0:h.get.elementScroll(e.top)),c=!i,u=0!==o.height;u&&(h.is.initialPosition()?e.top>=r.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):e.top>o.top&&(o.height+e.top-l>=r.bottom?(h.debug("Initial element position is bottom of container"),h.bindBottom()):(h.debug("Initial element position is fixed"),h.fixTop())):h.is.fixed()?h.is.top()?e.top<=o.top?(h.debug("Fixed element reached top of container"),h.setInitialPosition()):o.height+e.top-l>=r.bottom?(h.debug("Fixed element reached bottom of container"),h.bindBottom()):c&&(h.set.scroll(l),h.save.lastScroll(e.top),h.save.elementScroll(l)):h.is.bottom()&&(e.bottom-o.height<=o.top?(h.debug("Bottom fixed rail has reached top of container"),h.setInitialPosition()):e.bottom>=r.bottom?(h.debug("Bottom fixed rail has reached bottom of container"),h.bindBottom()):c&&(h.set.scroll(l),h.save.lastScroll(e.top),h.save.elementScroll(l))):h.is.bottom()&&(e.top<=o.top?(h.debug("Jumped from bottom fixed to top fixed, most likely used home/end button"),h.setInitialPosition()):v.pushing?h.is.bound()&&e.bottom<=r.bottom&&(h.debug("Fixing bottom attached element to bottom of browser."),h.fixBottom()):h.is.bound()&&e.top<=r.bottom-o.height&&(h.debug("Fixing bottom attached element to top of browser."),h.fixTop())))},bindTop:function(){h.debug("Binding element to top of parent container"),h.remove.offset(),k.css({left:"",top:"",marginBottom:""}).removeClass(b.fixed).removeClass(b.bottom).addClass(b.bound).addClass(b.top),v.onTop.call(E),v.onUnstick.call(E)},bindBottom:function(){h.debug("Binding element to bottom of parent container"),h.remove.offset(),k.css({left:"",top:""}).removeClass(b.fixed).removeClass(b.top).addClass(b.bound).addClass(b.bottom),v.onBottom.call(E),v.onUnstick.call(E)},setInitialPosition:function(){h.debug("Returning to initial position"),h.unfix(),h.unbind()},fixTop:function(){h.debug("Fixing element to top of page"),h.set.minimumSize(),h.set.offset(),k.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(b.bound).removeClass(b.bottom).addClass(b.fixed).addClass(b.top),v.onStick.call(E)},fixBottom:function(){h.debug("Sticking element to bottom of page"),h.set.minimumSize(),h.set.offset(),k.css({left:h.cache.element.left,bottom:"",marginBottom:""}).removeClass(b.bound).removeClass(b.top).addClass(b.fixed).addClass(b.bottom),v.onStick.call(E)},unbind:function(){h.is.bound()&&(h.debug("Removing container bound position on element"),h.remove.offset(),k.removeClass(b.bound).removeClass(b.top).removeClass(b.bottom))},unfix:function(){h.is.fixed()&&(h.debug("Removing fixed position on element"),h.remove.offset(),k.removeClass(b.fixed).removeClass(b.top).removeClass(b.bottom),v.onUnstick.call(E))},reset:function(){h.debug("Resetting elements position"),h.unbind(),h.unfix(),h.resetCSS(),h.remove.offset(),h.remove.lastScroll()},resetCSS:function(){k.css({width:"",height:""}),r.css({height:""})},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];v[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n}},debug:function(){!v.silent&&v.debug&&(v.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,v.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!v.silent&&v.verbose&&v.debug&&(v.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),h.verbose.apply(console,arguments)))},error:function(){v.silent||(h.error=Function.prototype.bind.call(console.error,console,v.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;v.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:E,"Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,0)},display:function(){var t=v.name+":",n=0;l=!1,clearTimeout(h.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=A;return n=n||f,o=E||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(A===i&&h.initialize(),h.invoke(u)):(A!==i&&A.invoke("destroy"),h.initialize())}),a!==i?a:this},e.fn.sticky.settings={name:"Sticky",namespace:"sticky",silent:!1,debug:!1,verbose:!0,performance:!0,pushing:!1,context:!1,container:!1,scrollContext:t,offset:0,bottomOffset:0,jitter:5,observeChanges:!1,onReposition:function(){},onScroll:function(){},onStick:function(){},onUnstick:function(){},onTop:function(){},onBottom:function(){},error:{container:"Sticky element must be inside a relative container",visible:"Element is hidden, you must call refresh after element becomes visible. Use silent setting to surpress this warning in production.",method:"The method you called is not defined.",invalidContext:"Context specified does not exist",elementSize:"Sticky element is larger than its container, cannot create sticky."},className:{bound:"bound",fixed:"fixed",supported:"native",top:"top",bottom:"bottom"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.tab=function(o){var a,r=e(e.isFunction(this)?t:this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1),m=!1;return r.each(function(){var g,p,h,v,b,y,x=e.isPlainObject(o)?e.extend(!0,{},e.fn.tab.settings,o):e.extend({},e.fn.tab.settings),C=x.className,w=x.metadata,k=x.selector,S=x.error,T="."+x.namespace,A="module-"+x.namespace,R=e(this),E={},P=!0,F=0,O=this,D=R.data(A);b={initialize:function(){b.debug("Initializing tab menu item",R),b.fix.callbacks(),b.determineTabs(),b.debug("Determining tabs",x.context,p),x.auto&&b.set.auto(),b.bind.events(),x.history&&!m&&(b.initializeHistory(),m=!0),b.instantiate()},instantiate:function(){b.verbose("Storing instance of module",b),D=b,R.data(A,b)},destroy:function(){b.debug("Destroying tabs",R),R.removeData(A).off(T)},bind:{events:function(){e.isWindow(O)||(b.debug("Attaching tab activation events to element",R),R.on("click"+T,b.event.click))}},determineTabs:function(){var t;"parent"===x.context?(R.closest(k.ui).length>0?(t=R.closest(k.ui),b.verbose("Using closest UI element as parent",t)):t=R,g=t.parent(),b.verbose("Determined parent element for creating context",g)):x.context?(g=e(x.context),b.verbose("Using selector for tab context",x.context,g)):g=e("body"),x.childrenOnly?(p=g.children(k.tabs),b.debug("Searching tab context children for tabs",g,p)):(p=g.find(k.tabs),b.debug("Searching tab context for tabs",g,p))},fix:{callbacks:function(){e.isPlainObject(o)&&(o.onTabLoad||o.onTabInit)&&(o.onTabLoad&&(o.onLoad=o.onTabLoad,delete o.onTabLoad,b.error(S.legacyLoad,o.onLoad)),o.onTabInit&&(o.onFirstLoad=o.onTabInit,delete o.onTabInit,b.error(S.legacyInit,o.onFirstLoad)),x=e.extend(!0,{},e.fn.tab.settings,o))}},initializeHistory:function(){if(b.debug("Initializing page state"),e.address===i)return b.error(S.state),!1;if("state"==x.historyType){if(b.debug("Using HTML5 to manage state"),x.path===!1)return b.error(S.path),!1;e.address.history(!0).state(x.path)}e.address.bind("change",b.event.history.change)},event:{click:function(t){var n=e(this).data(w.tab);n!==i?(x.history?(b.verbose("Updating page state",t),e.address.value(n)):(b.verbose("Changing tab",t),b.changeTab(n)),t.preventDefault()):b.debug("No tab specified")},history:{change:function(t){var n=t.pathNames.join("/")||b.get.initialPath(),o=x.templates.determineTitle(n)||!1;b.performance.display(),b.debug("History change event",n,t),y=t,n!==i&&b.changeTab(n),o&&e.address.title(o)}}},refresh:function(){h&&(b.debug("Refreshing tab",h),b.changeTab(h))},cache:{read:function(e){return e!==i&&E[e]},add:function(e,t){e=e||h,b.debug("Adding cached content for",e),E[e]=t},remove:function(e){e=e||h,b.debug("Removing cached content for",e),delete E[e]}},set:{auto:function(){var t="string"==typeof x.path?x.path.replace(/\/$/,"")+"/{$tab}":"/{$tab}";b.verbose("Setting up automatic tab retrieval from server",t),e.isPlainObject(x.apiSettings)?x.apiSettings.url=t:x.apiSettings={url:t}},loading:function(e){var t=b.get.tabElement(e),n=t.hasClass(C.loading);n||(b.verbose("Setting loading state for",t),t.addClass(C.loading).siblings(p).removeClass(C.active+" "+C.loading),t.length>0&&x.onRequest.call(t[0],e))},state:function(t){e.address.value(t)}},changeTab:function(n){var i=t.history&&t.history.pushState,o=i&&x.ignoreFirstLoad&&P,a=x.auto||e.isPlainObject(x.apiSettings),r=a&&!o?b.utilities.pathToArray(n):b.get.defaultPathArray(n);n=b.utilities.arrayToPath(r),e.each(r,function(t,i){var s,l,c,u,d=r.slice(0,t+1),f=b.utilities.arrayToPath(d),m=b.is.tab(f),p=t+1==r.length,k=b.get.tabElement(f);if(b.verbose("Looking for tab",i),m){if(b.verbose("Tab was found",i),h=f,v=b.utilities.filterArray(r,d),p?u=!0:(l=r.slice(0,t+2),c=b.utilities.arrayToPath(l),u=!b.is.tab(c),u&&b.verbose("Tab parameters found",l)),u&&a)return o?(b.debug("Ignoring remote content on first tab load",f),P=!1,b.cache.add(n,k.html()),b.activate.all(f),x.onFirstLoad.call(k[0],f,v,y),x.onLoad.call(k[0],f,v,y)):(b.activate.navigation(f),b.fetch.content(f,n)),!1;b.debug("Opened local tab",f),b.activate.all(f),b.cache.read(f)||(b.cache.add(f,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(k[0],f,v,y)),x.onLoad.call(k[0],f,v,y)}else{if(n.search("/")!=-1||""===n)return b.error(S.missingTab,R,g,f),!1;if(s=e("#"+n+', a[name="'+n+'"]'),f=s.closest("[data-tab]").data(w.tab),k=b.get.tabElement(f),s&&s.length>0&&f)return b.debug("Anchor link used, opening parent tab",k,s),k.hasClass(C.active)||setTimeout(function(){b.scrollTo(s)},0),b.activate.all(f),b.cache.read(f)||(b.cache.add(f,!0),b.debug("First time tab loaded calling tab init"),x.onFirstLoad.call(k[0],f,v,y)),x.onLoad.call(k[0],f,v,y),!1}})},scrollTo:function(t){var i=!!(t&&t.length>0)&&t.offset().top;i!==!1&&(b.debug("Forcing scroll to an in-page link in a hidden tab",i,t),e(n).scrollTop(i))},update:{content:function(t,n,o){var a=b.get.tabElement(t),r=a[0];o=o!==i?o:x.evaluateScripts,"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&"string"!=typeof n?a.empty().append(e(n).clone(!0)):o?(b.debug("Updating HTML and evaluating inline scripts",t,n),a.html(n)):(b.debug("Updating HTML",t,n),r.innerHTML=n)}},fetch:{content:function(t,n){var o,a,r=b.get.tabElement(t),s={dataType:"html",encodeParameters:!1,on:"now",cache:x.alwaysRefresh,headers:{"X-Remote":!0},onSuccess:function(e){"response"==x.cacheType&&b.cache.add(n,e),b.update.content(t,e),t==h?(b.debug("Content loaded",t),b.activate.tab(t)):b.debug("Content loaded in background",t),x.onFirstLoad.call(r[0],t,v,y),x.onLoad.call(r[0],t,v,y),"string"==typeof x.cacheType&&"dom"==x.cacheType.toLowerCase()&&r.children().length>0?setTimeout(function(){var e=r.children().clone(!0);e=e.not("script"),b.cache.add(n,e)},0):b.cache.add(n,r.html())},urlData:{tab:n}},l=r.api("get request")||!1,c=l&&"pending"===l.state();n=n||t,a=b.cache.read(n),x.cache&&a?(b.activate.tab(t),b.debug("Adding cached content",n),"once"==x.evaluateScripts?b.update.content(t,a,!1):b.update.content(t,a),x.onLoad.call(r[0],t,v,y)):c?(b.set.loading(t),b.debug("Content is already loading",n)):e.api!==i?(o=e.extend(!0,{},x.apiSettings,s),b.debug("Retrieving remote content",n,o),b.set.loading(t),r.api(o)):b.error(S.api)}},activate:{all:function(e){b.activate.tab(e),b.activate.navigation(e)},tab:function(e){var t=b.get.tabElement(e),n="siblings"==x.deactivate?t.siblings(p):p.not(t),i=t.hasClass(C.active);b.verbose("Showing tab content for",t),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading),t.length>0&&x.onVisible.call(t[0],e))},navigation:function(e){var t=b.get.navElement(e),n="siblings"==x.deactivate?t.siblings(r):r.not(t),i=t.hasClass(C.active);b.verbose("Activating tab navigation for",t,e),i||(t.addClass(C.active),n.removeClass(C.active+" "+C.loading))}},deactivate:{all:function(){b.deactivate.navigation(),b.deactivate.tabs()},navigation:function(){r.removeClass(C.active)},tabs:function(){p.removeClass(C.active+" "+C.loading)}},is:{tab:function(e){return e!==i&&b.get.tabElement(e).length>0}},get:{initialPath:function(){return r.eq(0).data(w.tab)||p.eq(0).data(w.tab)},path:function(){return e.address.value()},defaultPathArray:function(e){return b.utilities.pathToArray(b.get.defaultPath(e))},defaultPath:function(e){var t=r.filter("[data-"+w.tab+'^="'+e+'/"]').eq(0),n=t.data(w.tab)||!1;if(n){if(b.debug("Found default tab",n),F<x.maxDepth)return F++,b.get.defaultPath(n);b.error(S.recursion)}else b.debug("No default tabs found for",e,p);return F=0,e},navElement:function(e){return e=e||h,r.filter("[data-"+w.tab+'="'+e+'"]')},tabElement:function(e){var t,n,i,o;return e=e||h,i=b.utilities.pathToArray(e),o=b.utilities.last(i),t=p.filter("[data-"+w.tab+'="'+e+'"]'),n=p.filter("[data-"+w.tab+'="'+o+'"]'),t.length>0?t:n},tab:function(){return h}},utilities:{filterArray:function(t,n){return e.grep(t,function(t){return e.inArray(t,n)==-1})},last:function(t){return!!e.isArray(t)&&t[t.length-1]},pathToArray:function(e){return e===i&&(e=h),"string"==typeof e?e.split("/"):[e]},arrayToPath:function(t){return!!e.isArray(t)&&t.join("/")}},setting:function(t,n){if(b.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,x,t);else{if(n===i)return x[t];e.isPlainObject(x[t])?e.extend(!0,x[t],n):x[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(n===i)return b[t];b[t]=n}},debug:function(){!x.silent&&x.debug&&(x.performance?b.performance.log(arguments):(b.debug=Function.prototype.bind.call(console.info,console,x.name+":"),b.debug.apply(console,arguments)))},verbose:function(){!x.silent&&x.verbose&&x.debug&&(x.performance?b.performance.log(arguments):(b.verbose=Function.prototype.bind.call(console.info,console,x.name+":"),b.verbose.apply(console,arguments)))},error:function(){x.silent||(b.error=Function.prototype.bind.call(console.error,console,x.name+":"),b.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;x.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:O,"Execution Time":n})),clearTimeout(b.performance.timer),b.performance.timer=setTimeout(b.performance.display,500)},display:function(){var t=x.name+":",n=0;l=!1,clearTimeout(b.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=D;return n=n||f,o=O||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(b.error(S.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(D===i&&b.initialize(),b.invoke(u)):(D!==i&&D.invoke("destroy"),b.initialize())}),a!==i?a:this},e.tab=function(){e(t).tab.apply(this,arguments)},e.fn.tab.settings={name:"Tab",namespace:"tab",silent:!1,debug:!1,verbose:!1,performance:!0,auto:!1,history:!1,historyType:"hash",path:!1,context:!1,childrenOnly:!1,maxDepth:25,deactivate:"siblings",alwaysRefresh:!1,cache:!0,cacheType:"response",ignoreFirstLoad:!1,apiSettings:!1,evaluateScripts:"once",onFirstLoad:function(e,t,n){},onLoad:function(e,t,n){},onVisible:function(e,t,n){},onRequest:function(e,t,n){},templates:{determineTitle:function(e){}},error:{api:"You attempted to load content without API module",method:"The method you called is not defined",missingTab:"Activated tab cannot be found. Tabs are case-sensitive.",noContent:"The tab you specified is missing a content url.",path:"History enabled, but no path was specified",recursion:"Max recursive depth reached",legacyInit:"onTabInit has been renamed to onFirstLoad in 2.0, please adjust your code.",
legacyLoad:"onTabLoad has been renamed to onLoad in 2.0. Please adjust your code",state:"History requires Asual's Address library <https://github.com/asual/jquery-address>"},metadata:{tab:"tab",loaded:"loaded",promise:"promise"},className:{loading:"loading",active:"active"},selector:{tabs:".ui.tab",ui:".ui"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.transition=function(){var o,a=e(this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments,u=c[0],d=[].slice.call(arguments,1),f="string"==typeof u;t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)};return a.each(function(t){var m,g,p,h,v,b,y,x,C,w=e(this),k=this;C={initialize:function(){m=C.get.settings.apply(k,c),h=m.className,p=m.error,v=m.metadata,x="."+m.namespace,y="module-"+m.namespace,g=w.data(y)||C,b=C.get.animationEndEvent(),f&&(f=C.invoke(u)),f===!1&&(C.verbose("Converted arguments into settings object",m),m.interval?C.delay(m.animate):C.animate(),C.instantiate())},instantiate:function(){C.verbose("Storing instance of module",C),g=C,w.data(y,g)},destroy:function(){C.verbose("Destroying previous module for",k),w.removeData(y)},refresh:function(){C.verbose("Refreshing display type on next animation"),delete C.displayType},forceRepaint:function(){C.verbose("Forcing element repaint");var e=w.parent(),t=w.next();0===t.length?w.detach().appendTo(e):w.detach().insertBefore(t)},repaint:function(){C.verbose("Repainting element");k.offsetWidth},delay:function(e){var n,o,r=C.get.animationDirection();r||(r=C.can.transition()?C.get.direction():"static"),e=e!==i?e:m.interval,n="auto"==m.reverse&&r==h.outward,o=n||1==m.reverse?(a.length-t)*m.interval:t*m.interval,C.debug("Delaying animation by",o),setTimeout(C.animate,o)},animate:function(e){if(m=e||m,!C.is.supported())return C.error(p.support),!1;if(C.debug("Preparing animation",m.animation),C.is.animating()){if(m.queue)return!m.allowRepeats&&C.has.direction()&&C.is.occurring()&&C.queuing!==!0?C.debug("Animation is currently occurring, preventing queueing same animation",m.animation):C.queue(m.animation),!1;if(!m.allowRepeats&&C.is.occurring())return C.debug("Animation is already occurring, will not execute repeated animation",m.animation),!1;C.debug("New animation started, completing previous early",m.animation),g.complete()}C.can.animate()?C.set.animating(m.animation):C.error(p.noAnimation,m.animation,k)},reset:function(){C.debug("Resetting animation to beginning conditions"),C.remove.animationCallbacks(),C.restore.conditions(),C.remove.animating()},queue:function(e){C.debug("Queueing animation of",e),C.queuing=!0,w.one(b+".queue"+x,function(){C.queuing=!1,C.repaint(),C.animate.apply(this,m)})},complete:function(e){C.debug("Animation complete",m.animation),C.remove.completeCallback(),C.remove.failSafe(),C.is.looping()||(C.is.outward()?(C.verbose("Animation is outward, hiding element"),C.restore.conditions(),C.hide()):C.is.inward()?(C.verbose("Animation is outward, showing element"),C.restore.conditions(),C.show()):(C.verbose("Static animation completed"),C.restore.conditions(),m.onComplete.call(k)))},force:{visible:function(){var e=w.attr("style"),t=C.get.userStyle(),n=C.get.displayType(),o=t+"display: "+n+" !important;",a=w.css("display"),r=e===i||""===e;a!==n?(C.verbose("Overriding default display to show element",n),w.attr("style",o)):r&&w.removeAttr("style")},hidden:function(){var e=w.attr("style"),t=w.css("display"),n=e===i||""===e;"none"===t||C.is.hidden()?n&&w.removeAttr("style"):(C.verbose("Overriding default display to hide element"),w.css("display","none"))}},has:{direction:function(t){var n=!1;return t=t||m.animation,"string"==typeof t&&(t=t.split(" "),e.each(t,function(e,t){t!==h.inward&&t!==h.outward||(n=!0)})),n},inlineDisplay:function(){var t=w.attr("style")||"";return e.isArray(t.match(/display.*?;/,""))}},set:{animating:function(e){var t;C.remove.completeCallback(),e=e||m.animation,t=C.get.animationClass(e),C.save.animation(t),C.force.visible(),C.remove.hidden(),C.remove.direction(),C.start.animation(t)},duration:function(e,t){t=t||m.duration,t="number"==typeof t?t+"ms":t,(t||0===t)&&(C.verbose("Setting animation duration",t),w.css({"animation-duration":t}))},direction:function(e){e=e||C.get.direction(),e==h.inward?C.set.inward():C.set.outward()},looping:function(){C.debug("Transition set to loop"),w.addClass(h.looping)},hidden:function(){w.addClass(h.transition).addClass(h.hidden)},inward:function(){C.debug("Setting direction to inward"),w.removeClass(h.outward).addClass(h.inward)},outward:function(){C.debug("Setting direction to outward"),w.removeClass(h.inward).addClass(h.outward)},visible:function(){w.addClass(h.transition).addClass(h.visible)}},start:{animation:function(e){e=e||C.get.animationClass(),C.debug("Starting tween",e),w.addClass(e).one(b+".complete"+x,C.complete),m.useFailSafe&&C.add.failSafe(),C.set.duration(m.duration),m.onStart.call(k)}},save:{animation:function(e){C.cache||(C.cache={}),C.cache.animation=e},displayType:function(e){"none"!==e&&w.data(v.displayType,e)},transitionExists:function(t,n){e.fn.transition.exists[t]=n,C.verbose("Saving existence of transition",t,n)}},restore:{conditions:function(){var e=C.get.currentAnimation();e&&(w.removeClass(e),C.verbose("Removing animation class",C.cache)),C.remove.duration()}},add:{failSafe:function(){var e=C.get.duration();C.timer=setTimeout(function(){w.triggerHandler(b)},e+m.failSafeDelay),C.verbose("Adding fail safe timer",C.timer)}},remove:{animating:function(){w.removeClass(h.animating)},animationCallbacks:function(){C.remove.queueCallback(),C.remove.completeCallback()},queueCallback:function(){w.off(".queue"+x)},completeCallback:function(){w.off(".complete"+x)},display:function(){w.css("display","")},direction:function(){w.removeClass(h.inward).removeClass(h.outward)},duration:function(){w.css("animation-duration","")},failSafe:function(){C.verbose("Removing fail safe timer",C.timer),C.timer&&clearTimeout(C.timer)},hidden:function(){w.removeClass(h.hidden)},visible:function(){w.removeClass(h.visible)},looping:function(){C.debug("Transitions are no longer looping"),C.is.looping()&&(C.reset(),w.removeClass(h.looping))},transition:function(){w.removeClass(h.visible).removeClass(h.hidden)}},get:{settings:function(t,n,i){return"object"==typeof t?e.extend(!0,{},e.fn.transition.settings,t):"function"==typeof i?e.extend({},e.fn.transition.settings,{animation:t,onComplete:i,duration:n}):"string"==typeof n||"number"==typeof n?e.extend({},e.fn.transition.settings,{animation:t,duration:n}):"object"==typeof n?e.extend({},e.fn.transition.settings,n,{animation:t}):"function"==typeof n?e.extend({},e.fn.transition.settings,{animation:t,onComplete:n}):e.extend({},e.fn.transition.settings,{animation:t})},animationClass:function(e){var t=e||m.animation,n=C.can.transition()&&!C.has.direction()?C.get.direction()+" ":"";return h.animating+" "+h.transition+" "+n+t},currentAnimation:function(){return!(!C.cache||C.cache.animation===i)&&C.cache.animation},currentDirection:function(){return C.is.inward()?h.inward:h.outward},direction:function(){return C.is.hidden()||!C.is.visible()?h.inward:h.outward},animationDirection:function(t){var n;return t=t||m.animation,"string"==typeof t&&(t=t.split(" "),e.each(t,function(e,t){t===h.inward?n=h.inward:t===h.outward&&(n=h.outward)})),!!n&&n},duration:function(e){return e=e||m.duration,e===!1&&(e=w.css("animation-duration")||0),"string"==typeof e?e.indexOf("ms")>-1?parseFloat(e):1e3*parseFloat(e):e},displayType:function(e){return e=e===i||e,m.displayType?m.displayType:(e&&w.data(v.displayType)===i&&C.can.transition(!0),w.data(v.displayType))},userStyle:function(e){return e=e||w.attr("style")||"",e.replace(/display.*?;/,"")},transitionExists:function(t){return e.fn.transition.exists[t]},animationStartEvent:function(){var e,t=n.createElement("div"),o={animation:"animationstart",OAnimation:"oAnimationStart",MozAnimation:"mozAnimationStart",WebkitAnimation:"webkitAnimationStart"};for(e in o)if(t.style[e]!==i)return o[e];return!1},animationEndEvent:function(){var e,t=n.createElement("div"),o={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"mozAnimationEnd",WebkitAnimation:"webkitAnimationEnd"};for(e in o)if(t.style[e]!==i)return o[e];return!1}},can:{transition:function(t){var n,o,a,r,s,l,c=m.animation,u=C.get.transitionExists(c),d=C.get.displayType(!1);if(u===i||t){if(C.verbose("Determining whether animation exists"),n=w.attr("class"),o=w.prop("tagName"),a=e("<"+o+" />").addClass(n).insertAfter(w),r=a.addClass(c).removeClass(h.inward).removeClass(h.outward).addClass(h.animating).addClass(h.transition).css("animationName"),s=a.addClass(h.inward).css("animationName"),d||(d=a.attr("class",n).removeAttr("style").removeClass(h.hidden).removeClass(h.visible).show().css("display"),C.verbose("Determining final display state",d),C.save.displayType(d)),a.remove(),r!=s)C.debug("Direction exists for animation",c),l=!0;else{if("none"==r||!r)return void C.debug("No animation defined in css",c);C.debug("Static animation found",c,d),l=!1}C.save.transitionExists(c,l)}return u!==i?u:l},animate:function(){return C.can.transition()!==i}},is:{animating:function(){return w.hasClass(h.animating)},inward:function(){return w.hasClass(h.inward)},outward:function(){return w.hasClass(h.outward)},looping:function(){return w.hasClass(h.looping)},occurring:function(e){return e=e||m.animation,e="."+e.replace(" ","."),w.filter(e).length>0},visible:function(){return w.is(":visible")},hidden:function(){return"hidden"===w.css("visibility")},supported:function(){return b!==!1}},hide:function(){C.verbose("Hiding element"),C.is.animating()&&C.reset(),k.blur(),C.remove.display(),C.remove.visible(),C.set.hidden(),C.force.hidden(),m.onHide.call(k),m.onComplete.call(k)},show:function(e){C.verbose("Showing element",e),C.remove.hidden(),C.set.visible(),C.force.visible(),m.onShow.call(k),m.onComplete.call(k)},toggle:function(){C.is.visible()?C.hide():C.show()},stop:function(){C.debug("Stopping current animation"),w.triggerHandler(b)},stopAll:function(){C.debug("Stopping all animation"),C.remove.queueCallback(),w.triggerHandler(b)},clear:{queue:function(){C.debug("Clearing animation queue"),C.remove.queueCallback()}},enable:function(){C.verbose("Starting animation"),w.removeClass(h.disabled)},disable:function(){C.debug("Stopping animation"),w.addClass(h.disabled)},setting:function(t,n){if(C.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,m,t);else{if(n===i)return m[t];e.isPlainObject(m[t])?e.extend(!0,m[t],n):m[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,C,t);else{if(n===i)return C[t];C[t]=n}},debug:function(){!m.silent&&m.debug&&(m.performance?C.performance.log(arguments):(C.debug=Function.prototype.bind.call(console.info,console,m.name+":"),C.debug.apply(console,arguments)))},verbose:function(){!m.silent&&m.verbose&&m.debug&&(m.performance?C.performance.log(arguments):(C.verbose=Function.prototype.bind.call(console.info,console,m.name+":"),C.verbose.apply(console,arguments)))},error:function(){m.silent||(C.error=Function.prototype.bind.call(console.error,console,m.name+":"),C.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;m.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:k,"Execution Time":n})),clearTimeout(C.performance.timer),C.performance.timer=setTimeout(C.performance.display,500)},display:function(){var t=m.name+":",n=0;s=!1,clearTimeout(C.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=g;return n=n||d,a=k||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i&&(s=c[o],!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s!==i&&s}},C.initialize()}),o!==i?o:this},e.fn.transition.exists={},e.fn.transition.settings={name:"Transition",silent:!1,debug:!1,verbose:!1,performance:!0,namespace:"transition",interval:0,reverse:"auto",onStart:function(){},onComplete:function(){},onShow:function(){},onHide:function(){},useFailSafe:!0,failSafeDelay:100,allowRepeats:!1,displayType:!1,animation:"fade",duration:!1,queue:!0,metadata:{displayType:"display"},className:{animating:"animating",disabled:"disabled",hidden:"hidden",inward:"in",loading:"loading",looping:"looping",outward:"out",transition:"transition",visible:"visible"},error:{noAnimation:"Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.",repeated:"That animation is already occurring, cancelling repeated animation",method:"The method you called is not defined",support:"This browser does not support CSS animations"}}}(jQuery,window,document),function(e,t,n,i){"use strict";var t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();e.api=e.fn.api=function(n){var o,a=e(e.isFunction(this)?t:this),r=a.selector||"",s=(new Date).getTime(),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var a,f,m,g,p,h,v=e.isPlainObject(n)?e.extend(!0,{},e.fn.api.settings,n):e.extend({},e.fn.api.settings),b=v.namespace,y=v.metadata,x=v.selector,C=v.error,w=v.className,k="."+b,S="module-"+b,T=e(this),A=T.closest(x.form),R=v.stateContext?e(v.stateContext):T,E=this,P=R[0],F=T.data(S);h={initialize:function(){u||h.bind.events(),h.instantiate()},instantiate:function(){h.verbose("Storing instance of module",h),F=h,T.data(S,F)},destroy:function(){h.verbose("Destroying previous module for",E),T.removeData(S).off(k)},bind:{events:function(){var e=h.get.event();e?(h.verbose("Attaching API events to element",e),T.on(e+k,h.event.trigger)):"now"==v.on&&(h.debug("Querying API endpoint immediately"),h.query())}},decode:{json:function(e){if(e!==i&&"string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}},read:{cachedResponse:function(e){var n;return t.Storage===i?void h.error(C.noStorage):(n=sessionStorage.getItem(e),h.debug("Using cached response",e,n),n=h.decode.json(n))}},write:{cachedResponse:function(n,o){return o&&""===o?void h.debug("Response empty, not caching",o):t.Storage===i?void h.error(C.noStorage):(e.isPlainObject(o)&&(o=JSON.stringify(o)),sessionStorage.setItem(n,o),void h.verbose("Storing cached response for url",n,o))}},query:function(){if(h.is.disabled())return void h.debug("Element is disabled API request aborted");if(h.is.loading()){if(!v.interruptRequests)return void h.debug("Cancelling request, previous request is still pending");h.debug("Interrupting previous request"),h.abort()}return v.defaultData&&e.extend(!0,v.urlData,h.get.defaultData()),v.serializeForm&&(v.data=h.add.formData(v.data)),f=h.get.settings(),f===!1?(h.cancelled=!0,void h.error(C.beforeSend)):(h.cancelled=!1,m=h.get.templatedURL(),m||h.is.mocked()?(m=h.add.urlData(m),m||h.is.mocked()?(f.url=v.base+m,a=e.extend(!0,{},v,{type:v.method||v.type,data:g,url:v.base+m,beforeSend:v.beforeXHR,success:function(){},failure:function(){},complete:function(){}}),h.debug("Querying URL",a.url),h.verbose("Using AJAX settings",a),"local"===v.cache&&h.read.cachedResponse(m)?(h.debug("Response returned from local cache"),h.request=h.create.request(),void h.request.resolveWith(P,[h.read.cachedResponse(m)])):void(v.throttle?v.throttleFirstRequest||h.timer?(h.debug("Throttling request",v.throttle),clearTimeout(h.timer),h.timer=setTimeout(function(){h.timer&&delete h.timer,h.debug("Sending throttled request",g,a.method),h.send.request()},v.throttle)):(h.debug("Sending request",g,a.method),h.send.request(),h.timer=setTimeout(function(){},v.throttle)):(h.debug("Sending request",g,a.method),h.send.request()))):void 0):void h.error(C.missingURL))},should:{removeError:function(){return v.hideError===!0||"auto"===v.hideError&&!h.is.form()}},is:{disabled:function(){return T.filter(x.disabled).length>0},expectingJSON:function(){return"json"===v.dataType||"jsonp"===v.dataType},form:function(){return T.is("form")||R.is("form")},mocked:function(){return v.mockResponse||v.mockResponseAsync||v.response||v.responseAsync},input:function(){return T.is("input")},loading:function(){return!!h.request&&"pending"==h.request.state()},abortedRequest:function(e){return e&&e.readyState!==i&&0===e.readyState?(h.verbose("XHR request determined to be aborted"),!0):(h.verbose("XHR request was not aborted"),!1)},validResponse:function(t){return h.is.expectingJSON()&&e.isFunction(v.successTest)?(h.debug("Checking JSON returned success",v.successTest,t),v.successTest(t)?(h.debug("Response passed success test",t),!0):(h.debug("Response failed success test",t),!1)):(h.verbose("Response is not JSON, skipping validation",v.successTest,t),!0)}},was:{cancelled:function(){return h.cancelled||!1},succesful:function(){return h.request&&"resolved"==h.request.state()},failure:function(){return h.request&&"rejected"==h.request.state()},complete:function(){return h.request&&("resolved"==h.request.state()||"rejected"==h.request.state())}},add:{urlData:function(t,n){var o,a;return t&&(o=t.match(v.regExp.required),a=t.match(v.regExp.optional),n=n||v.urlData,o&&(h.debug("Looking for required URL variables",o),e.each(o,function(o,a){var r=a.indexOf("$")!==-1?a.substr(2,a.length-3):a.substr(1,a.length-2),s=e.isPlainObject(n)&&n[r]!==i?n[r]:T.data(r)!==i?T.data(r):R.data(r)!==i?R.data(r):n[r];return s===i?(h.error(C.requiredParameter,r,t),t=!1,!1):(h.verbose("Found required variable",r,s),s=v.encodeParameters?h.get.urlEncodedValue(s):s,t=t.replace(a,s),void 0)})),a&&(h.debug("Looking for optional URL variables",o),e.each(a,function(o,a){var r=a.indexOf("$")!==-1?a.substr(3,a.length-4):a.substr(2,a.length-3),s=e.isPlainObject(n)&&n[r]!==i?n[r]:T.data(r)!==i?T.data(r):R.data(r)!==i?R.data(r):n[r];s!==i?(h.verbose("Optional variable Found",r,s),t=t.replace(a,s)):(h.verbose("Optional variable not found",r),t=t.indexOf("/"+a)!==-1?t.replace("/"+a,""):t.replace(a,""))}))),t},formData:function(t){var n,o=e.fn.serializeObject!==i,a=o?A.serializeObject():A.serialize();return t=t||v.data,n=e.isPlainObject(t),n?o?(h.debug("Extending existing data with form data",t,a),t=e.extend(!0,{},t,a)):(h.error(C.missingSerialize),h.debug("Cant extend data. Replacing data with form data",t,a),t=a):(h.debug("Adding form data",a),t=a),t}},send:{request:function(){h.set.loading(),h.request=h.create.request(),h.is.mocked()?h.mockedXHR=h.create.mockedXHR():h.xhr=h.create.xhr(),v.onRequest.call(P,h.request,h.xhr)}},event:{trigger:function(e){h.query(),"submit"!=e.type&&"click"!=e.type||e.preventDefault()},xhr:{always:function(){},done:function(t,n,i){var o=this,a=(new Date).getTime()-p,r=v.loadingDuration-a,s=!!e.isFunction(v.onResponse)&&(h.is.expectingJSON()?v.onResponse.call(o,e.extend(!0,{},t)):v.onResponse.call(o,t));r=r>0?r:0,s&&(h.debug("Modified API response in onResponse callback",v.onResponse,s,t),t=s),r>0&&h.debug("Response completed early delaying state change by",r),setTimeout(function(){h.is.validResponse(t)?h.request.resolveWith(o,[t,i]):h.request.rejectWith(o,[i,"invalid"])},r)},fail:function(e,t,n){var i=this,o=(new Date).getTime()-p,a=v.loadingDuration-o;a=a>0?a:0,a>0&&h.debug("Response completed early delaying state change by",a),setTimeout(function(){h.is.abortedRequest(e)?h.request.rejectWith(i,[e,"aborted",n]):h.request.rejectWith(i,[e,"error",t,n])},a)}},request:{done:function(e,t){h.debug("Successful API Response",e),"local"===v.cache&&m&&(h.write.cachedResponse(m,e),h.debug("Saving server response locally",h.cache)),v.onSuccess.call(P,e,T,t)},complete:function(e,t){var n,i;h.was.succesful()?(i=e,n=t):(n=e,i=h.get.responseFromXHR(n)),h.remove.loading(),v.onComplete.call(P,i,T,n)},fail:function(e,t,n){var o=h.get.responseFromXHR(e),r=h.get.errorFromRequest(o,t,n);return"aborted"==t?(h.debug("XHR Aborted (Most likely caused by page navigation or CORS Policy)",t,n),v.onAbort.call(P,t,T,e),!0):("invalid"==t?h.debug("JSON did not pass success test. A server-side error has most likely occurred",o):"error"==t&&e!==i&&(h.debug("XHR produced a server error",t,n),200!=e.status&&n!==i&&""!==n&&h.error(C.statusMessage+n,a.url),v.onError.call(P,r,T,e)),v.errorDuration&&"aborted"!==t&&(h.debug("Adding error state"),h.set.error(),h.should.removeError()&&setTimeout(h.remove.error,v.errorDuration)),h.debug("API Request failed",r,e),void v.onFailure.call(P,o,T,e))}}},create:{request:function(){return e.Deferred().always(h.event.request.complete).done(h.event.request.done).fail(h.event.request.fail)},mockedXHR:function(){var t,n,i,o=!1,a=!1,r=!1,s=v.mockResponse||v.response,l=v.mockResponseAsync||v.responseAsync;return i=e.Deferred().always(h.event.xhr.complete).done(h.event.xhr.done).fail(h.event.xhr.fail),s?(e.isFunction(s)?(h.debug("Using specified synchronous callback",s),n=s.call(P,f)):(h.debug("Using settings specified response",s),n=s),i.resolveWith(P,[n,o,{responseText:n}])):e.isFunction(l)&&(t=function(e){h.debug("Async callback returned response",e),e?i.resolveWith(P,[e,o,{responseText:e}]):i.rejectWith(P,[{responseText:e},a,r])},h.debug("Using specified async response callback",l),l.call(P,f,t)),i},xhr:function(){var t;return t=e.ajax(a).always(h.event.xhr.always).done(h.event.xhr.done).fail(h.event.xhr.fail),h.verbose("Created server request",t,a),t}},set:{error:function(){h.verbose("Adding error state to element",R),R.addClass(w.error)},loading:function(){h.verbose("Adding loading state to element",R),R.addClass(w.loading),p=(new Date).getTime()}},remove:{error:function(){h.verbose("Removing error state from element",R),R.removeClass(w.error)},loading:function(){h.verbose("Removing loading state from element",R),R.removeClass(w.loading)}},get:{responseFromXHR:function(t){return!!e.isPlainObject(t)&&(h.is.expectingJSON()?h.decode.json(t.responseText):t.responseText)},errorFromRequest:function(t,n,o){return e.isPlainObject(t)&&t.error!==i?t.error:v.error[n]!==i?v.error[n]:o},request:function(){return h.request||!1},xhr:function(){return h.xhr||!1},settings:function(){var t;return t=v.beforeSend.call(P,v),t&&(t.success!==i&&(h.debug("Legacy success callback detected",t),h.error(C.legacyParameters,t.success),t.onSuccess=t.success),t.failure!==i&&(h.debug("Legacy failure callback detected",t),h.error(C.legacyParameters,t.failure),t.onFailure=t.failure),t.complete!==i&&(h.debug("Legacy complete callback detected",t),h.error(C.legacyParameters,t.complete),t.onComplete=t.complete)),t===i&&h.error(C.noReturnedValue),t===!1?t:t!==i?e.extend(!0,{},t):e.extend(!0,{},v)},urlEncodedValue:function(e){var n=t.decodeURIComponent(e),i=t.encodeURIComponent(e),o=n!==e;return o?(h.debug("URL value is already encoded, avoiding double encoding",e),e):(h.verbose("Encoding value using encodeURIComponent",e,i),i)},defaultData:function(){var t={};return e.isWindow(E)||(h.is.input()?t.value=T.val():h.is.form()||(t.text=T.text())),t},event:function(){return e.isWindow(E)||"now"==v.on?(h.debug("API called without element, no events attached"),!1):"auto"==v.on?T.is("input")?E.oninput!==i?"input":E.onpropertychange!==i?"propertychange":"keyup":T.is("form")?"submit":"click":v.on},templatedURL:function(e){if(e=e||T.data(y.action)||v.action||!1,m=T.data(y.url)||v.url||!1)return h.debug("Using specified url",m),m;if(e){if(h.debug("Looking up url for action",e,v.api),v.api[e]===i&&!h.is.mocked())return void h.error(C.missingAction,v.action,v.api);m=v.api[e]}else h.is.form()&&(m=T.attr("action")||R.attr("action")||!1,h.debug("No url or action specified, defaulting to form action",m));return m}},abort:function(){var e=h.get.xhr();e&&"resolved"!==e.state()&&(h.debug("Cancelling API request"),e.abort())},reset:function(){h.remove.error(),h.remove.loading()},setting:function(t,n){if(h.debug("Changing setting",t,n),e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];e.isPlainObject(v[t])?e.extend(!0,v[t],n):v[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,h,t);else{if(n===i)return h[t];h[t]=n}},debug:function(){!v.silent&&v.debug&&(v.performance?h.performance.log(arguments):(h.debug=Function.prototype.bind.call(console.info,console,v.name+":"),h.debug.apply(console,arguments)))},verbose:function(){!v.silent&&v.verbose&&v.debug&&(v.performance?h.performance.log(arguments):(h.verbose=Function.prototype.bind.call(console.info,console,v.name+":"),h.verbose.apply(console,arguments)))},error:function(){v.silent||(h.error=Function.prototype.bind.call(console.error,console,v.name+":"),h.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;v.performance&&(t=(new Date).getTime(),i=s||t,n=t-i,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"","Execution Time":n})),clearTimeout(h.performance.timer),h.performance.timer=setTimeout(h.performance.display,500)},display:function(){var t=v.name+":",n=0;s=!1,clearTimeout(h.performance.timer),e.each(l,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,n,a){var r,s,l,c=F;return n=n||d,a=E||a,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(h.error(C.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(a,n):s!==i&&(l=s),e.isArray(o)?o.push(l):o!==i?o=[o,l]:l!==i&&(o=l),s}},u?(F===i&&h.initialize(),h.invoke(c)):(F!==i&&F.invoke("destroy"),h.initialize())}),o!==i?o:this},e.api.settings={name:"API",namespace:"api",debug:!1,verbose:!1,performance:!0,api:{},cache:!0,interruptRequests:!0,on:"auto",stateContext:!1,loadingDuration:0,hideError:"auto",errorDuration:2e3,encodeParameters:!0,action:!1,url:!1,base:"",urlData:{},defaultData:!0,serializeForm:!1,throttle:0,throttleFirstRequest:!0,method:"get",data:{},dataType:"json",mockResponse:!1,mockResponseAsync:!1,response:!1,responseAsync:!1,beforeSend:function(e){return e},beforeXHR:function(e){},onRequest:function(e,t){},onResponse:!1,onSuccess:function(e,t){},onComplete:function(e,t){},onFailure:function(e,t){},onError:function(e,t){},onAbort:function(e,t){},successTest:!1,error:{beforeSend:"The before send function has aborted the request",error:"There was an error with your request",exitConditions:"API Request Aborted. Exit conditions met",JSONParse:"JSON could not be parsed during error handling",legacyParameters:"You are using legacy API success callback names",method:"The method you called is not defined",missingAction:"API action used but no url was defined",missingSerialize:"jquery-serialize-object is required to add form data to an existing data object",missingURL:"No URL specified for api event",noReturnedValue:"The beforeSend callback must return a settings object, beforeSend ignored.",noStorage:"Caching responses locally requires session storage",parseError:"There was an error parsing your request",requiredParameter:"Missing a required URL parameter: ",statusMessage:"Server gave an error: ",timeout:"Your request timed out"},regExp:{required:/\{\$*[A-z0-9]+\}/g,optional:/\{\/\$*[A-z0-9]+\}/g},className:{loading:"loading",error:"error"},selector:{disabled:".disabled",form:"form"},metadata:{action:"action",url:"url"}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.state=function(t){var o,a=e(this),r=a.selector||"",s=("ontouchstart"in n.documentElement,(new Date).getTime()),l=[],c=arguments[0],u="string"==typeof c,d=[].slice.call(arguments,1);return a.each(function(){var n,f=e.isPlainObject(t)?e.extend(!0,{},e.fn.state.settings,t):e.extend({},e.fn.state.settings),m=f.error,g=f.metadata,p=f.className,h=f.namespace,v=f.states,b=f.text,y="."+h,x=h+"-module",C=e(this),w=this,k=C.data(x);n={initialize:function(){n.verbose("Initializing module"),f.automatic&&n.add.defaults(),f.context&&""!==r?e(f.context).on(r,"mouseenter"+y,n.change.text).on(r,"mouseleave"+y,n.reset.text).on(r,"click"+y,n.toggle.state):C.on("mouseenter"+y,n.change.text).on("mouseleave"+y,n.reset.text).on("click"+y,n.toggle.state),n.instantiate()},instantiate:function(){n.verbose("Storing instance of module",n),k=n,C.data(x,n)},destroy:function(){n.verbose("Destroying previous module",k),C.off(y).removeData(x)},refresh:function(){n.verbose("Refreshing selector cache"),C=e(w)},add:{defaults:function(){var o=t&&e.isPlainObject(t.states)?t.states:{};e.each(f.defaults,function(t,a){n.is[t]!==i&&n.is[t]()&&(n.verbose("Adding default states",t,w),e.extend(f.states,a,o))})}},is:{active:function(){return C.hasClass(p.active)},loading:function(){return C.hasClass(p.loading)},inactive:function(){return!C.hasClass(p.active)},state:function(e){return p[e]!==i&&C.hasClass(p[e])},enabled:function(){return!C.is(f.filter.active)},disabled:function(){return C.is(f.filter.active)},textEnabled:function(){return!C.is(f.filter.text)},button:function(){return C.is(".button:not(a, .submit)")},input:function(){return C.is("input")},progress:function(){return C.is(".ui.progress")}},allow:function(e){n.debug("Now allowing state",e),v[e]=!0},disallow:function(e){n.debug("No longer allowing",e),v[e]=!1},allows:function(e){return v[e]||!1},enable:function(){C.removeClass(p.disabled)},disable:function(){C.addClass(p.disabled)},setState:function(e){n.allows(e)&&C.addClass(p[e])},removeState:function(e){n.allows(e)&&C.removeClass(p[e])},toggle:{state:function(){var t,o;if(n.allows("active")&&n.is.enabled()){if(n.refresh(),e.fn.api!==i)if(t=C.api("get request"),o=C.api("was cancelled"))n.debug("API Request cancelled by beforesend"),f.activateTest=function(){return!1},f.deactivateTest=function(){return!1};else if(t)return void n.listenTo(t);n.change.state()}}},listenTo:function(t){n.debug("API request detected, waiting for state signal",t),t&&(b.loading&&n.update.text(b.loading),e.when(t).then(function(){"resolved"==t.state()?(n.debug("API request succeeded"),f.activateTest=function(){return!0},f.deactivateTest=function(){return!0}):(n.debug("API request failed"),f.activateTest=function(){return!1},f.deactivateTest=function(){return!1}),n.change.state()}))},change:{state:function(){n.debug("Determining state change direction"),n.is.inactive()?n.activate():n.deactivate(),f.sync&&n.sync(),f.onChange.call(w)},text:function(){n.is.textEnabled()&&(n.is.disabled()?(n.verbose("Changing text to disabled text",b.hover),n.update.text(b.disabled)):n.is.active()?b.hover?(n.verbose("Changing text to hover text",b.hover),n.update.text(b.hover)):b.deactivate&&(n.verbose("Changing text to deactivating text",b.deactivate),n.update.text(b.deactivate)):b.hover?(n.verbose("Changing text to hover text",b.hover),n.update.text(b.hover)):b.activate&&(n.verbose("Changing text to activating text",b.activate),n.update.text(b.activate)))}},activate:function(){f.activateTest.call(w)&&(n.debug("Setting state to active"),C.addClass(p.active),n.update.text(b.active),f.onActivate.call(w))},deactivate:function(){f.deactivateTest.call(w)&&(n.debug("Setting state to inactive"),C.removeClass(p.active),n.update.text(b.inactive),f.onDeactivate.call(w));
},sync:function(){n.verbose("Syncing other buttons to current state"),n.is.active()?a.not(C).state("activate"):a.not(C).state("deactivate")},get:{text:function(){return f.selector.text?C.find(f.selector.text).text():C.html()},textFor:function(e){return b[e]||!1}},flash:{text:function(e,t,i){var o=n.get.text();n.debug("Flashing text message",e,t),e=e||f.text.flash,t=t||f.flashDuration,i=i||function(){},n.update.text(e),setTimeout(function(){n.update.text(o),i.call(w)},t)}},reset:{text:function(){var e=b.active||C.data(g.storedText),t=b.inactive||C.data(g.storedText);n.is.textEnabled()&&(n.is.active()&&e?(n.verbose("Resetting active text",e),n.update.text(e)):t&&(n.verbose("Resetting inactive text",e),n.update.text(t)))}},update:{text:function(e){var t=n.get.text();e&&e!==t?(n.debug("Updating text",e),f.selector.text?C.data(g.storedText,e).find(f.selector.text).text(e):C.data(g.storedText,e).html(e)):n.debug("Text is already set, ignoring update",e)}},setting:function(t,o){if(n.debug("Changing setting",t,o),e.isPlainObject(t))e.extend(!0,f,t);else{if(o===i)return f[t];e.isPlainObject(f[t])?e.extend(!0,f[t],o):f[t]=o}},internal:function(t,o){if(e.isPlainObject(t))e.extend(!0,n,t);else{if(o===i)return n[t];n[t]=o}},debug:function(){!f.silent&&f.debug&&(f.performance?n.performance.log(arguments):(n.debug=Function.prototype.bind.call(console.info,console,f.name+":"),n.debug.apply(console,arguments)))},verbose:function(){!f.silent&&f.verbose&&f.debug&&(f.performance?n.performance.log(arguments):(n.verbose=Function.prototype.bind.call(console.info,console,f.name+":"),n.verbose.apply(console,arguments)))},error:function(){f.silent||(n.error=Function.prototype.bind.call(console.error,console,f.name+":"),n.error.apply(console,arguments))},performance:{log:function(e){var t,i,o;f.performance&&(t=(new Date).getTime(),o=s||t,i=t-o,s=t,l.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:w,"Execution Time":i})),clearTimeout(n.performance.timer),n.performance.timer=setTimeout(n.performance.display,500)},display:function(){var t=f.name+":",o=0;s=!1,clearTimeout(n.performance.timer),e.each(l,function(e,t){o+=t["Execution Time"]}),t+=" "+o+"ms",r&&(t+=" '"+r+"'"),(console.group!==i||console.table!==i)&&l.length>0&&(console.groupCollapsed(t),console.table?console.table(l):e.each(l,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),l=[]}},invoke:function(t,a,r){var s,l,c,u=k;return a=a||d,r=w||r,"string"==typeof t&&u!==i&&(t=t.split(/[\. ]/),s=t.length-1,e.each(t,function(o,a){var r=o!=s?a+t[o+1].charAt(0).toUpperCase()+t[o+1].slice(1):t;if(e.isPlainObject(u[r])&&o!=s)u=u[r];else{if(u[r]!==i)return l=u[r],!1;if(!e.isPlainObject(u[a])||o==s)return u[a]!==i?(l=u[a],!1):(n.error(m.method,t),!1);u=u[a]}})),e.isFunction(l)?c=l.apply(r,a):l!==i&&(c=l),e.isArray(o)?o.push(c):o!==i?o=[o,c]:c!==i&&(o=c),l}},u?(k===i&&n.initialize(),n.invoke(c)):(k!==i&&k.invoke("destroy"),n.initialize())}),o!==i?o:this},e.fn.state.settings={name:"State",debug:!1,verbose:!1,namespace:"state",performance:!0,onActivate:function(){},onDeactivate:function(){},onChange:function(){},activateTest:function(){return!0},deactivateTest:function(){return!0},automatic:!0,sync:!1,flashDuration:1e3,filter:{text:".loading, .disabled",active:".disabled"},context:!1,error:{beforeSend:"The before send function has cancelled state change",method:"The method you called is not defined."},metadata:{promise:"promise",storedText:"stored-text"},className:{active:"active",disabled:"disabled",error:"error",loading:"loading",success:"success",warning:"warning"},selector:{text:!1},defaults:{input:{disabled:!0,loading:!0,active:!0},button:{disabled:!0,loading:!0,active:!0},progress:{active:!0,success:!0,warning:!0,error:!0}},states:{active:!0,disabled:!0,error:!0,loading:!0,success:!0,warning:!0},text:{disabled:!1,flash:!1,hover:!1,active:!1,inactive:!1,activate:!1,deactivate:!1}}}(jQuery,window,document),function(e,t,n,i){"use strict";t="undefined"!=typeof t&&t.Math==Math?t:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")(),e.fn.visibility=function(o){var a,r=e(this),s=r.selector||"",l=(new Date).getTime(),c=[],u=arguments[0],d="string"==typeof u,f=[].slice.call(arguments,1),m=r.length,g=0;return r.each(function(){var r,p,h,v,b=e.isPlainObject(o)?e.extend(!0,{},e.fn.visibility.settings,o):e.extend({},e.fn.visibility.settings),y=b.className,x=b.namespace,C=b.error,w=b.metadata,k="."+x,S="module-"+x,T=e(t),A=e(this),R=e(b.context),E=(A.selector||"",A.data(S)),P=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,0)},F=this,O=!1;v={initialize:function(){v.debug("Initializing",b),v.setup.cache(),v.should.trackChanges()&&("image"==b.type&&v.setup.image(),"fixed"==b.type&&v.setup.fixed(),b.observeChanges&&v.observeChanges(),v.bind.events()),v.save.position(),v.is.visible()||v.error(C.visible,A),b.initialCheck&&v.checkVisibility(),v.instantiate()},instantiate:function(){v.debug("Storing instance",v),A.data(S,v),E=v},destroy:function(){v.verbose("Destroying previous module"),h&&h.disconnect(),p&&p.disconnect(),T.off("load"+k,v.event.load).off("resize"+k,v.event.resize),R.off("scroll"+k,v.event.scroll).off("scrollchange"+k,v.event.scrollchange),"fixed"==b.type&&(v.resetFixed(),v.remove.placeholder()),A.off(k).removeData(S)},observeChanges:function(){"MutationObserver"in t&&(p=new MutationObserver(v.event.contextChanged),h=new MutationObserver(v.event.changed),p.observe(n,{childList:!0,subtree:!0}),h.observe(F,{childList:!0,subtree:!0}),v.debug("Setting up mutation observer",h))},bind:{events:function(){v.verbose("Binding visibility events to scroll and resize"),b.refreshOnLoad&&T.on("load"+k,v.event.load),T.on("resize"+k,v.event.resize),R.off("scroll"+k).on("scroll"+k,v.event.scroll).on("scrollchange"+k,v.event.scrollchange)}},event:{changed:function(e){v.verbose("DOM tree modified, updating visibility calculations"),v.timer=setTimeout(function(){v.verbose("DOM tree modified, updating sticky menu"),v.refresh()},100)},contextChanged:function(t){[].forEach.call(t,function(t){t.removedNodes&&[].forEach.call(t.removedNodes,function(t){(t==F||e(t).find(F).length>0)&&(v.debug("Element removed from DOM, tearing down events"),v.destroy())})})},resize:function(){v.debug("Window resized"),b.refreshOnResize&&P(v.refresh)},load:function(){v.debug("Page finished loading"),P(v.refresh)},scroll:function(){b.throttle?(clearTimeout(v.timer),v.timer=setTimeout(function(){R.triggerHandler("scrollchange"+k,[R.scrollTop()])},b.throttle)):P(function(){R.triggerHandler("scrollchange"+k,[R.scrollTop()])})},scrollchange:function(e,t){v.checkVisibility(t)}},precache:function(t,i){t instanceof Array||(t=[t]);for(var o=t.length,a=0,r=[],s=n.createElement("img"),l=function(){a++,a>=t.length&&e.isFunction(i)&&i()};o--;)s=n.createElement("img"),s.onload=l,s.onerror=l,s.src=t[o],r.push(s)},enableCallbacks:function(){v.debug("Allowing callbacks to occur"),O=!1},disableCallbacks:function(){v.debug("Disabling all callbacks temporarily"),O=!0},should:{trackChanges:function(){return d?(v.debug("One time query, no need to bind events"),!1):(v.debug("Callbacks being attached"),!0)}},setup:{cache:function(){v.cache={occurred:{},screen:{},element:{}}},image:function(){var e=A.data(w.src);e&&(v.verbose("Lazy loading image",e),b.once=!0,b.observeChanges=!1,b.onOnScreen=function(){v.debug("Image on screen",F),v.precache(e,function(){v.set.image(e,function(){g++,g==m&&b.onAllLoaded.call(this),b.onLoad.call(this)})})})},fixed:function(){v.debug("Setting up fixed"),b.once=!1,b.observeChanges=!1,b.initialCheck=!0,b.refreshOnLoad=!0,o.transition||(b.transition=!1),v.create.placeholder(),v.debug("Added placeholder",r),b.onTopPassed=function(){v.debug("Element passed, adding fixed position",A),v.show.placeholder(),v.set.fixed(),b.transition&&e.fn.transition!==i&&A.transition(b.transition,b.duration)},b.onTopPassedReverse=function(){v.debug("Element returned to position, removing fixed",A),v.hide.placeholder(),v.remove.fixed()}}},create:{placeholder:function(){v.verbose("Creating fixed position placeholder"),r=A.clone(!1).css("display","none").addClass(y.placeholder).insertAfter(A)}},show:{placeholder:function(){v.verbose("Showing placeholder"),r.css("display","block").css("visibility","hidden")}},hide:{placeholder:function(){v.verbose("Hiding placeholder"),r.css("display","none").css("visibility","")}},set:{fixed:function(){v.verbose("Setting element to fixed position"),A.addClass(y.fixed).css({position:"fixed",top:b.offset+"px",left:"auto",zIndex:b.zIndex}),b.onFixed.call(F)},image:function(t,n){A.attr("src",t),b.transition?e.fn.transition!==i?A.transition(b.transition,b.duration,n):A.fadeIn(b.duration,n):A.show()}},is:{onScreen:function(){var e=v.get.elementCalculations();return e.onScreen},offScreen:function(){var e=v.get.elementCalculations();return e.offScreen},visible:function(){return!(!v.cache||!v.cache.element)&&!(0===v.cache.element.width&&0===v.cache.element.offset.top)}},refresh:function(){v.debug("Refreshing constants (width/height)"),"fixed"==b.type&&v.resetFixed(),v.reset(),v.save.position(),b.checkOnRefresh&&v.checkVisibility(),b.onRefresh.call(F)},resetFixed:function(){v.remove.fixed(),v.remove.occurred()},reset:function(){v.verbose("Resetting all cached values"),e.isPlainObject(v.cache)&&(v.cache.screen={},v.cache.element={})},checkVisibility:function(e){v.verbose("Checking visibility of element",v.cache.element),!O&&v.is.visible()&&(v.save.scroll(e),v.save.calculations(),v.passed(),v.passingReverse(),v.topVisibleReverse(),v.bottomVisibleReverse(),v.topPassedReverse(),v.bottomPassedReverse(),v.onScreen(),v.offScreen(),v.passing(),v.topVisible(),v.bottomVisible(),v.topPassed(),v.bottomPassed(),b.onUpdate&&b.onUpdate.call(F,v.get.elementCalculations()))},passed:function(t,n){var o=v.get.elementCalculations();if(t&&n)b.onPassed[t]=n;else{if(t!==i)return v.get.pixelsPassed(t)>o.pixelsPassed;o.passing&&e.each(b.onPassed,function(e,t){o.bottomVisible||o.pixelsPassed>v.get.pixelsPassed(e)?v.execute(t,e):b.once||v.remove.occurred(t)})}},onScreen:function(e){var t=v.get.elementCalculations(),n=e||b.onOnScreen,o="onScreen";if(e&&(v.debug("Adding callback for onScreen",e),b.onOnScreen=e),t.onScreen?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.onOnScreen},offScreen:function(e){var t=v.get.elementCalculations(),n=e||b.onOffScreen,o="offScreen";if(e&&(v.debug("Adding callback for offScreen",e),b.onOffScreen=e),t.offScreen?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.onOffScreen},passing:function(e){var t=v.get.elementCalculations(),n=e||b.onPassing,o="passing";if(e&&(v.debug("Adding callback for passing",e),b.onPassing=e),t.passing?v.execute(n,o):b.once||v.remove.occurred(o),e!==i)return t.passing},topVisible:function(e){var t=v.get.elementCalculations(),n=e||b.onTopVisible,o="topVisible";if(e&&(v.debug("Adding callback for top visible",e),b.onTopVisible=e),t.topVisible?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.topVisible},bottomVisible:function(e){var t=v.get.elementCalculations(),n=e||b.onBottomVisible,o="bottomVisible";if(e&&(v.debug("Adding callback for bottom visible",e),b.onBottomVisible=e),t.bottomVisible?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.bottomVisible},topPassed:function(e){var t=v.get.elementCalculations(),n=e||b.onTopPassed,o="topPassed";if(e&&(v.debug("Adding callback for top passed",e),b.onTopPassed=e),t.topPassed?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.topPassed},bottomPassed:function(e){var t=v.get.elementCalculations(),n=e||b.onBottomPassed,o="bottomPassed";if(e&&(v.debug("Adding callback for bottom passed",e),b.onBottomPassed=e),t.bottomPassed?v.execute(n,o):b.once||v.remove.occurred(o),e===i)return t.bottomPassed},passingReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onPassingReverse,o="passingReverse";if(e&&(v.debug("Adding callback for passing reverse",e),b.onPassingReverse=e),t.passing?b.once||v.remove.occurred(o):v.get.occurred("passing")&&v.execute(n,o),e!==i)return!t.passing},topVisibleReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onTopVisibleReverse,o="topVisibleReverse";if(e&&(v.debug("Adding callback for top visible reverse",e),b.onTopVisibleReverse=e),t.topVisible?b.once||v.remove.occurred(o):v.get.occurred("topVisible")&&v.execute(n,o),e===i)return!t.topVisible},bottomVisibleReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onBottomVisibleReverse,o="bottomVisibleReverse";if(e&&(v.debug("Adding callback for bottom visible reverse",e),b.onBottomVisibleReverse=e),t.bottomVisible?b.once||v.remove.occurred(o):v.get.occurred("bottomVisible")&&v.execute(n,o),e===i)return!t.bottomVisible},topPassedReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onTopPassedReverse,o="topPassedReverse";if(e&&(v.debug("Adding callback for top passed reverse",e),b.onTopPassedReverse=e),t.topPassed?b.once||v.remove.occurred(o):v.get.occurred("topPassed")&&v.execute(n,o),e===i)return!t.onTopPassed},bottomPassedReverse:function(e){var t=v.get.elementCalculations(),n=e||b.onBottomPassedReverse,o="bottomPassedReverse";if(e&&(v.debug("Adding callback for bottom passed reverse",e),b.onBottomPassedReverse=e),t.bottomPassed?b.once||v.remove.occurred(o):v.get.occurred("bottomPassed")&&v.execute(n,o),e===i)return!t.bottomPassed},execute:function(e,t){var n=v.get.elementCalculations(),i=v.get.screenCalculations();e=e||!1,e&&(b.continuous?(v.debug("Callback being called continuously",t,n),e.call(F,n,i)):v.get.occurred(t)||(v.debug("Conditions met",t,n),e.call(F,n,i))),v.save.occurred(t)},remove:{fixed:function(){v.debug("Removing fixed position"),A.removeClass(y.fixed).css({position:"",top:"",left:"",zIndex:""}),b.onUnfixed.call(F)},placeholder:function(){v.debug("Removing placeholder content"),r&&r.remove()},occurred:function(e){if(e){var t=v.cache.occurred;t[e]!==i&&t[e]===!0&&(v.debug("Callback can now be called again",e),v.cache.occurred[e]=!1)}else v.cache.occurred={}}},save:{calculations:function(){v.verbose("Saving all calculations necessary to determine positioning"),v.save.direction(),v.save.screenCalculations(),v.save.elementCalculations()},occurred:function(e){e&&(v.cache.occurred[e]!==i&&v.cache.occurred[e]===!0||(v.verbose("Saving callback occurred",e),v.cache.occurred[e]=!0))},scroll:function(e){e=e+b.offset||R.scrollTop()+b.offset,v.cache.scroll=e},direction:function(){var e,t=v.get.scroll(),n=v.get.lastScroll();return e=t>n&&n?"down":t<n&&n?"up":"static",v.cache.direction=e,v.cache.direction},elementPosition:function(){var e=v.cache.element,t=v.get.screenSize();return v.verbose("Saving element position"),e.fits=e.height<t.height,e.offset=A.offset(),e.width=A.outerWidth(),e.height=A.outerHeight(),v.cache.element=e,e},elementCalculations:function(){var e=v.get.screenCalculations(),t=v.get.elementPosition();return b.includeMargin?(t.margin={},t.margin.top=parseInt(A.css("margin-top"),10),t.margin.bottom=parseInt(A.css("margin-bottom"),10),t.top=t.offset.top-t.margin.top,t.bottom=t.offset.top+t.height+t.margin.bottom):(t.top=t.offset.top,t.bottom=t.offset.top+t.height),t.topVisible=e.bottom>=t.top,t.topPassed=e.top>=t.top,t.bottomVisible=e.bottom>=t.bottom,t.bottomPassed=e.top>=t.bottom,t.pixelsPassed=0,t.percentagePassed=0,t.onScreen=t.topVisible&&!t.bottomPassed,t.passing=t.topPassed&&!t.bottomPassed,t.offScreen=!t.onScreen,t.passing&&(t.pixelsPassed=e.top-t.top,t.percentagePassed=(e.top-t.top)/t.height),v.cache.element=t,v.verbose("Updated element calculations",t),t},screenCalculations:function(){var e=v.get.scroll();return v.save.direction(),v.cache.screen.top=e,v.cache.screen.bottom=e+v.cache.screen.height,v.cache.screen},screenSize:function(){v.verbose("Saving window position"),v.cache.screen={height:R.height()}},position:function(){v.save.screenSize(),v.save.elementPosition()}},get:{pixelsPassed:function(e){var t=v.get.elementCalculations();return e.search("%")>-1?t.height*(parseInt(e,10)/100):parseInt(e,10)},occurred:function(e){return v.cache.occurred!==i&&(v.cache.occurred[e]||!1)},direction:function(){return v.cache.direction===i&&v.save.direction(),v.cache.direction},elementPosition:function(){return v.cache.element===i&&v.save.elementPosition(),v.cache.element},elementCalculations:function(){return v.cache.element===i&&v.save.elementCalculations(),v.cache.element},screenCalculations:function(){return v.cache.screen===i&&v.save.screenCalculations(),v.cache.screen},screenSize:function(){return v.cache.screen===i&&v.save.screenSize(),v.cache.screen},scroll:function(){return v.cache.scroll===i&&v.save.scroll(),v.cache.scroll},lastScroll:function(){return v.cache.screen===i?(v.debug("First scroll event, no last scroll could be found"),!1):v.cache.screen.top}},setting:function(t,n){if(e.isPlainObject(t))e.extend(!0,b,t);else{if(n===i)return b[t];b[t]=n}},internal:function(t,n){if(e.isPlainObject(t))e.extend(!0,v,t);else{if(n===i)return v[t];v[t]=n}},debug:function(){!b.silent&&b.debug&&(b.performance?v.performance.log(arguments):(v.debug=Function.prototype.bind.call(console.info,console,b.name+":"),v.debug.apply(console,arguments)))},verbose:function(){!b.silent&&b.verbose&&b.debug&&(b.performance?v.performance.log(arguments):(v.verbose=Function.prototype.bind.call(console.info,console,b.name+":"),v.verbose.apply(console,arguments)))},error:function(){b.silent||(v.error=Function.prototype.bind.call(console.error,console,b.name+":"),v.error.apply(console,arguments))},performance:{log:function(e){var t,n,i;b.performance&&(t=(new Date).getTime(),i=l||t,n=t-i,l=t,c.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:F,"Execution Time":n})),clearTimeout(v.performance.timer),v.performance.timer=setTimeout(v.performance.display,500)},display:function(){var t=b.name+":",n=0;l=!1,clearTimeout(v.performance.timer),e.each(c,function(e,t){n+=t["Execution Time"]}),t+=" "+n+"ms",s&&(t+=" '"+s+"'"),(console.group!==i||console.table!==i)&&c.length>0&&(console.groupCollapsed(t),console.table?console.table(c):e.each(c,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),c=[]}},invoke:function(t,n,o){var r,s,l,c=E;return n=n||f,o=F||o,"string"==typeof t&&c!==i&&(t=t.split(/[\. ]/),r=t.length-1,e.each(t,function(n,o){var a=n!=r?o+t[n+1].charAt(0).toUpperCase()+t[n+1].slice(1):t;if(e.isPlainObject(c[a])&&n!=r)c=c[a];else{if(c[a]!==i)return s=c[a],!1;if(!e.isPlainObject(c[o])||n==r)return c[o]!==i?(s=c[o],!1):(v.error(C.method,t),!1);c=c[o]}})),e.isFunction(s)?l=s.apply(o,n):s!==i&&(l=s),e.isArray(a)?a.push(l):a!==i?a=[a,l]:l!==i&&(a=l),s}},d?(E===i&&v.initialize(),E.save.scroll(),E.save.calculations(),v.invoke(u)):(E!==i&&E.invoke("destroy"),v.initialize())}),a!==i?a:this},e.fn.visibility.settings={name:"Visibility",namespace:"visibility",debug:!1,verbose:!1,performance:!0,observeChanges:!0,initialCheck:!0,refreshOnLoad:!0,refreshOnResize:!0,checkOnRefresh:!0,once:!0,continuous:!1,offset:0,includeMargin:!1,context:t,throttle:!1,type:!1,zIndex:"10",transition:"fade in",duration:1e3,onPassed:{},onOnScreen:!1,onOffScreen:!1,onPassing:!1,onTopVisible:!1,onBottomVisible:!1,onTopPassed:!1,onBottomPassed:!1,onPassingReverse:!1,onTopVisibleReverse:!1,onBottomVisibleReverse:!1,onTopPassedReverse:!1,onBottomPassedReverse:!1,onLoad:function(){},onAllLoaded:function(){},onFixed:function(){},onUnfixed:function(){},onUpdate:!1,onRefresh:function(){},metadata:{src:"src"},className:{fixed:"fixed",placeholder:"placeholder"},error:{method:"The method you called is not defined.",visible:"Element is hidden, you must call refresh after element becomes visible"}}}(jQuery,window,document);
