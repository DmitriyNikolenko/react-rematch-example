module.exports = {
	"root": true,
    "env": {
        "browser": true,
        "es6": true
    },
	"extends": ["eslint:recommended"],
	"parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
			"jsx": true,
			"modules": true
        },
		"sourceType": "module",
		"ecmaVersion": 8
	},
	"globals": {
		"React": true,
		"window": true,
		"require": true,
		"document": true
	},

	"plugins": [
		"react", "jsx"
	  ],
    "rules": {
//		"curly": 2,                      // specify curly brace conventions for all control statements
//		"eqeqeq": 1,                     // require the use of === and !==
//		"no-extend-native": 0,           // disallow adding to native types
//		"lines-between-class-members": ["warn", "always"],
//		"multiline-comment-style": ["warn", "bare-block"],


		///// Разрешено /////

		// This rule aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn’t match the preferences specified.
		"space-before-function-paren": ["warn", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],

		"newline-per-chained-call": "off",	// "warn", { "ignoreChainWithDepth": 2 }],

		// This rule enforces consistent line breaks inside parentheses of function parameters or arguments.
//		"function-paren-newline": ["warn", "never"],

		// Note that every getter is expected to return a value.
		"getter-return": "error",

		// This rule enforces line breaks between array elements.
		"array-element-newline": 0,

		// This rule reports line terminators around semicolons.
		"semi-style": ["error", "first"],

		"padding-line-between-statements": [
			"warn",
			{ "blankLine": "always", "prev": "directive", "next": "*" },
			{ "blankLine": "any",    "prev": "directive", "next": "directive" },
			{ "blankLine": "always", "prev": "*", "next": "return" },
			{ "blankLine": "always", "prev": "import", "next": "*"},
			{ "blankLine": "any",    "prev": "import", "next": "import"},
			{ "blankLine": "always", "prev": "*", "next": "function" },
			{ "blankLine": "always", "prev": "*", "next": "block-like" },
			{ "blankLine": "always", "prev": "*", "next": "case" },
			{ "blankLine": "always", "prev": "*", "next": "default" }
		],

		// This rule finds callback functions of the following methods, then checks usage of return statement.
		"array-callback-return": "error",

		// JavaScript suspends the control flow statements of try and catch blocks until the execution of finally block finishes. So, when return, throw, break, or continue is used in finally
		"no-unsafe-finally": "error",

		// This rule disallows the renaming of import, export, and destructured assignments to the same nam
		"no-useless-rename": "error",

		// This rule disallows unnecessary usage of computed property keys.
		"no-useless-computed-key": "warn",

		// This rule flags escapes that can be safely removed without changing behavior..
		"no-useless-escape": "error",

		// This rule is aimed at preventing the accidental calling of Symbol with the new operator.
		"no-new-symbol": "error",

		// This rule is aimed at eliminating self assignments.
		"no-self-assign": "error",

		// This rule finds references which are inside of loop conditions, then checks the variables of those references are modified in the loop.
		"no-unmodified-loop-condition": "error",

		// is rule flags class constructors that can be safely removed without changing how the class works.
		"no-useless-constructor": "warn",

		// This rule disallows whitespace around the dot or before the opening bracket before properties of objects if they are on the same line. 
		"no-whitespace-before-property": "warn",

		// This rule aims to maintain consistency around the spacing inside of template literals.
		"template-curly-spacing": "warn",

		// This rule enforces a consistent newlines around variable declarations. This rule ignores variable declarations inside for loop conditionals.
		"one-var-declaration-per-line": ["warn", "always"],

		// This rule enforces a maximum number of statements allowed per line.
		"max-statements-per-line": ["warn", { "max": 1 }],

		// This rules requires that all imports from a single module exists in a single import statement.
		"no-duplicate-imports": "error",

		// This rules requires a description when creating symbols.
		"symbol-description": "warn",

		// This rule aims to enforce consistent spacing between rest and spread operators and their expressions. 
		"rest-spread-spacing": ["error", "never"],

		// This rule enforces consistent position of line comments. Block comments are not affected by this rule. 
		"line-comment-position": ["warn", { "position": "above" }],

		// This rule requires function names to match the name of the variable or property to which they are assigned.
		"func-name-matching": ["error", "always"],

		// This rule aims to report redundant return statements.
		"no-useless-return": "warn",

		// This rule disallows calls to parseInt() or Number.parseInt() if called with two arguments: a string; and a radix option of 2 (binary), 8 (octal), or 16 (hexadecimal).
		"prefer-numeric-literals": "error",

		// This rule aims to warn when a regular string contains what looks like a template literal placeholder. 
		"no-template-curly-in-string": "error",

		// This rule aims to ensure that Promises are only rejected with Error objects.
		"prefer-promise-reject-errors": ["error", {"allowEmptyReject": true}],
		
		// A for loop with a stop condition that can never be reached, such as one with a counter that moves in the wrong direction, will run infinitely.
		"for-direction": "error",

		// This rule controls spacing around colons of case and default clauses in switch statements.
		"switch-colon-spacing": "error",

		// This rule disallows calling and constructing the Buffer() constructor.
		"no-buffer-constructor": "error",

		// The rule should warn against code that tries to compare against -0, since that will not work as intended. That is, code like x === -0 will pass for both +0 and -0. 
		"no-compare-neg-zero": "error",

		// This rule aims to enforce a consistent location for single-line statements.
		"nonblock-statement-body-position": ["error", "below"],

		// Async functions which have no await expression may be the unintentional result of refactoring.
		"require-await": "error",

		// This rule aims to maintain consistency around the spacing between template tag functions and their template literals.
		"template-tag-spacing": "error",

		// Generators are a new type of function in ECMAScript 6 that can return multiple values over time. These special functions are indicated by placing an * after the function keyword.
		"generator-star-spacing": ["error", {"before": false, "after": true}],

		// Отступы только табы.
		"indent": ["warn", "tab", { "SwitchCase": 1 }],
		
		// Только одинарные кавычки.
		"quotes": ["warn", "single"],
		
		// Без точек с запятой.
		"semi": ["error", "never"],
		
		// disallow trailing commas in object literals
		"comma-dangle": ["warn", {
			"arrays": "ignore",
			"objects": "always",
			"imports": "always",
			"exports": "always",
			"functions": "ignore"
		}],     								

		// This rule enforces consistent spacing around keywords and keyword-like tokens
		"keyword-spacing": ["error", { "after": true }],

		// disallow assignment in conditional expressions
		"no-cond-assign": ["error", "always"],

		// disallow use of constant expressions in conditions
		"no-constant-condition": ["error", { "checkLoops": false }],   
		
		// disallow control characters in regular expressions
		"no-control-regex": "error",     
		
		// disallow duplicate keys when creating object literals
		"no-dupe-keys": "error",               

		// disallow empty statements
		"no-empty": "error",    
		
		// disallow the use of empty character classes in regular expressions
		"no-empty-character-class": "error",             

		// disallow assigning to the exception in a catch block
		"no-ex-assign": "error",               

		// disallow double-negation boolean casts in a boolean context
		"no-extra-boolean-cast": "error",
		
		// disallow unnecessary semicolons
		"no-extra-semi": "error",              

		// disallow invalid regular expression strings in the RegExp constructor
		"no-invalid-regexp": "error",   

		// disallow negation of the left operand of an in expression
		"no-negated-in-lhs": "error",          

		// disallow the use of object properties of the global object (Math and JSON) as functions
		"no-obj-calls": "error",  
		
		// disallow multiple spaces in a regular expression literal
		"no-regex-spaces": "error",  
		
        // disallow sparse arrays
		"no-sparse-arrays": "error",
		
		// disallow unreachable statements after a return, throw, continue, or break statement
		"no-unreachable": "error",
		
		// disallow comparisons with the value NaN
		"use-isnan": "error",   
		
		// Ensure JSDoc comments are valid (off by default). true работает наоборот как false.
		// "valid-jsdoc": ["warn", { "requireReturn": false }],                

		// // requires JSDoc comments for the specified nodes
		// "require-jsdoc": ["warn", {
		// 	"require": {
		// 		"FunctionDeclaration": true,
		// 		"MethodDefinition": false,
		// 		"ClassDeclaration": true,
		// 		"ArrowFunctionExpression": true,
		// 		"FunctionExpression": true
		// 	}
		// }],

		// Ensure that the results of typeof are compared against a valid string
		"valid-typeof": "error",               

		// require default case in switch statements (off by default)
		"default-case": "warn",               

		// make sure for-in loops have an if statement (off by default)
		"guard-for-in": "warn",               

		// disallow use of arguments.caller or arguments.callee
		"no-caller": "warn", 
		
		// disallow use of eval()
		"no-eval": "error",   

		// disallow use of eval()-like methods
		"no-implied-eval": "error",            
		
		// disallow comparisons to null without a type-checking operator (off by default)
		"no-eq-null": "error",                 

		// treat var statements as if they were block scoped (off by default)
		"block-scoped-var": "error",                   

		// disallow unnecessary function binding
		"no-extra-bind": "warn",       
		
		// disallow fallthrough of case statements
		"no-fallthrough": ["error", { "commentPattern": "break[\\s\\w]*omitted" }],

		// disallow the use of leading or trailing decimal points in numeric literals (off by default)
		"no-floating-decimal": "warn",        

		// disallow use of labeled statements
		"no-labels": "error",                  

		// disallow usage of __iterator__ property
		"no-iterator": "error",                

		// disallow unnecessary nested blocks
		"no-lone-blocks": 1,                         

		// disallow reassignments of native objects
		"no-native-reassign": "error",        

		// disallow use of new operator when not part of the assignment or comparison
		"no-new-object": "warn",

		// disallow use of new operator for Function object
		"no-new-func": "error",                 

		// disallows creating new instances of String,Number, and Boolean
		"no-new-wrappers": "error",            

		// disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
		"no-octal-escape": "warn",
		
		// disallow usage of __proto__ property
		"no-proto": "error",                   

		// disallow declaring the same variable more then once
		"no-redeclare": "error",              

		// disallow use of assignment in return statement
		"no-return-assign": "error",

		// disallow comparisons where both sides are exactly the same (off by default)
		"no-self-compare": "error",           

		// disallow use of comma operator
		"no-sequences": "warn",               

		// disallow usage of expressions in statement position
		"no-unused-expressions": ["error", { "allowShortCircuit": true }],      

		// disallow use of void operator (off by default)
		"no-void": "error",
		
		// disallow use of the with statement
		"no-with": "error",                   
		
		// require use of the second argument for parseInt() (off by default)
		"radix": "error",  		
		
		// require or disallow Yoda conditions
		"yoda": "error", 
		
		// disallow deletion of variables
		"no-delete-var": 2,
		
		// disallow labels that share a name with a variable
		"no-label-var": 2,        
		
		// disallow declaration of variables already declared in the outer scope
		"no-shadow": 1,                  

		// disallow shadowing of names such as arguments
		"no-shadow-restricted-names": 2, 

		// disallow use of undeclared variables unless mentioned in a /*global */ block.
		"no-undef": 2,   

		// disallow declaration of variables that are not used in the code
		"no-unused-vars": ["error", {"vars": "all", "args": "after-used"}],

		// enforces error handling in callbacks (off by default) (on by default in the node environment)
		"handle-callback-err": 1,   
	
		// disallow use of new operator with the require function (off by default) (on by default in the node environment)
		"no-new-require": 2,            
		
		// disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
		"no-path-concat": 2,    
	
		"key-spacing": ["warn", { 
			"multiLine": {
				"beforeColon": false,
				"afterColon": true
			},
			"singleLine": {
				"beforeColon": false,
				"afterColon": true
			}
		}],

		"comma-spacing": ["warn", { "before": false, "after": true }],


		"no-multi-spaces": "warn",

		// enforce one true brace style (off by default)
		"brace-style": ["error", "stroustrup", { "allowSingleLine": false }],                

		// require camel case names
		"camelcase": ["error", { "properties": "always" }],                  

		// enforces consistent naming when capturing the current execution context (off by default)
		"consistent-this": "warn",
		
		// enforces use of function declarations or expressions (off by default)
		"func-style": ["warn", "declaration", { "allowArrowFunctions": true }], 

		// disallow the omission of parentheses when invoking a constructor with no arguments
		"new-parens": "error",     
		
        // disallow use of the Array constructor
		"no-array-constructor": 2,       

		// disallow if as the only statement in an else block (off by default)
		"no-lonely-if": "warn",               

		
		// disallow space between function identifier and application
		"no-spaced-func": 1,      
		
		// disallow trailing whitespace at the end of lines
		"no-trailing-spaces": "warn", 
		
		// disallow dangling underscores in identifiers
		"no-underscore-dangle": 1,     
		
        // disallow mixed spaces and tabs for indentation
		"no-mixed-spaces-and-tabs": 1,  
 
		
		// require a space after certain keywords (off by default) 
//		"space-after-keywords": 1,         


		"object-curly-spacing": ["warn", "always"],

		"array-bracket-spacing": ["warn", "always"],

		// require or disallow spaces inside parentheses (off by default)
//		"space-in-parens": ["warn", "never"],            

		// require spaces around operators
		"space-infix-ops": 1,            

		// require a space after return, throw, and case
//		"space-return-throw-case": 1,    


		// require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
		"space-unary-ops": [1, { "words": true, "nonwords": false }], 

		// specify the maximum depth callbacks can be nested (off by default)
		"max-nested-callbacks": 2,       

		// require immediate function invocation to be wrapped in parentheses (off by default)
		"wrap-iife": ["error", "inside"], 

		// his rule enforces at least one newline (or absence thereof) at the end of non-empty files.
		"eol-last": ["warn", "never"],





		///// Игнор /////
		// This rule aims to enforce a consistent style of comments across your codebase, specifically by either requiring or disallowing a capitalized letter as the first word character in a comment. This rule will not issue warnings when non-cased letters are used.
//		"capitalized-comments": ["warn", "always", { "ignoreInlineComments": true, "ignorePattern": "pragma|ignore|TODO|FIX ME" } ],		

		 
		// disallow use of variables before they are defined
		"no-use-before-define": "off", 
		
		//
		"no-case-declarations": "off",

		// allow just one var statement per function (off by default)
		"one-var": "off",//["warn", "always"],  

		// This rule enforces a coding style where empty newlines are required or disallowed after var, let, or const statements to achieve a consistent coding style across the project.
		"newline-after-var": "off",

		// This rule disallows calling some Object.prototype methods directly on object instances.
		"no-prototype-builtins": "off",

		// specify the maximum cyclomatic complexity allowed in a program (off by default)
		"complexity": 0,       
		
		// disallow creation of functions within loops
		"no-loop-func": "off",    

		// Performing an operation on each element of an iterable is a common task. 
		// However, performing an await as part of each operation is an indication that the program is not taking full advantage of the parallelization benefits of async/await.
		"no-await-in-loop": "off",

		// require a capital letter for constructors
		"new-cap": 0,

		// This rule disallows specified identifiers in assignments and function definitions.
//		"id-blacklist": ["error", "data", "err", "e", "cb", "callback"],

		// This rule permits you to restrict the locations of property specifications in object literals. 
		"object-property-newline": 0,

		// This rule warns against using the arrow function syntax in places where it could be confused with a comparison operator.
		"no-confusing-arrow": 0,

		// This rule disallows var and named function declarations at the top-level script scope.
		"no-implicit-globals": 0,
		
		// This rule enforces consistent line breaks inside braces of object literals or destructuring assignments.
		"object-curly-newline": 0,

		// If a class method does not use this, it can sometimes be made into a static function.
		"class-methods-use-this": 0,

		// This rule looks for accessing a given property key on a given object name, either when reading the property’s value or invoking it as a function. 
		"no-restricted-properties": "off",

		// This rule disallows using multiple assignments within a single statement.
		"no-multi-assign": "error",

		// .This rule takes two sets of configuration objects. The first object parameter determines what types of destructuring the rule applies to.
		"prefer-destructuring": 0,

		// disallow use of console (off by default in the node environment)
		"no-console": 0,

		// disallow use of debugger
		"no-debugger": 0,        
		
		// disallow overwriting functions written as function declarations
		"no-func-assign": 0, 

		// disallow function or variable declarations in nested blocks
		"no-inner-declarations": 0,      

		// disallow reserved words being used as object literal keys (off by default)
		"no-reserved-keys": 0, 

		// disallow use of multiline strings
		"no-multi-str": 0, 

		// disallow use of octal literals
		"no-octal": 0,                   

			// disallow usage of configurable warning terms in comments": 1,
		"no-warning-comments": 0,       

		// require a space after a semi-colon
		"semi-spacing": 0,

		// requires to declare all vars on top of their containing scope (off by default)
		"vars-on-top": 0,              

		// require or disallow the "use strict" pragma in the global scope (off by default in the node environment)
		"strict": 0,         

		// disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
		"no-catch-shadow": 0,

		// disallow use of undefined variable (off by default)
		"no-undefined": 0, 

		// disallow use of undefined when initializing variables
		"no-undef-init": 0,

		// disallow process.exit() (on by default in the node environment)
		"no-process-exit": 0, 

		// disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
		"no-mixed-requires": 0, 

		// restrict usage of specified node modules (off by default)
		"no-restricted-modules": 0,      

		// disallow use of synchronous methods (off by default
		"no-sync": 0,                   

		// require function expressions to have a name (off by default)
		"func-names": 0,      
		
		// disallow nested ternary expressions (off by default)
		"no-nested-ternary": 0, 
		
		// disallow the use of ternary operators (off by default)
		"no-ternary": 0,   

		// disallow wrapping of non-IIFE statements in parens
		"no-extra-parens": 0,  
		
		// sort variables within the same declaration block (off by default)
		"sort-vars": 0,

		// require quotes around object literal property names (off by default)
		"quote-props": 0,  

		// require regex literals to be wrapped in parentheses (off by default)
		"wrap-regex": 0,      

		"consistent-return": 0,          // require return statements to either always or never specify values
		"dot-notation": 0,               // encourages use of dot notation whenever possible
		"no-alert": 0,                   // disallow the use of alert, confirm, and prompt
		"no-div-regex": 0,               // disallow division operators explicitly at beginning of regular expression (off by default)
		"no-else-return": 0,             // disallow else after a return in an if (off by default)
		"no-script-url": 0,              // disallow use of javascript: urls

	  	//// Legacy The following rules are included for compatibility with JSHint and JSLint. While the names of the rules may not match up with the JSHint/JSLint counterpart, the functionality is the same.
		
		// specify the maximum depth that blocks can be nested (off by default)
//		"max-depth": 4,                  
		// specify the maximum length of a line in your program (off by default)
//		"max-len": 80,        
		// limits the number of parameters that can be used in the function declaration. (off by default)
		"max-params": 0,                 
		// specify the maximum number of statement allowed in a function (off by default)
		"max-statements": 0,             
		// disallow use of bitwise operators (off by default)
		"no-bitwise": 1,                 
		// disallow use of unary operators, ++ and -- (off by default)
		"no-plusplus": 0,


		"react/display-name": 0,
		"react/jsx-boolean-value": 0,
		"jsx-quotes": [1, "prefer-double"],
		"react/jsx-sort-props": 0,
		"react/jsx-uses-react": 1,
		"react/jsx-uses-vars": 1,
		"react/no-multi-comp": 0,
		"react/no-unknown-property": 0,
		"react/prop-types": 0,
		"react/react-in-jsx-scope": 0,
		"react/self-closing-comp": 1,
		"react/wrap-multilines": 0,
		"react/jsx-no-undef": 2
    }
}