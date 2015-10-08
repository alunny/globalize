define([
	"./core",
	"./common/runtime-bind",
	"./common/validate/parameter-presence",
	"./common/validate/parameter-type/number",
	"./common/validate/parameter-type/plain-object",
	"./common/validate/parameter-type/string",
	"./unit/formatter-fn",
	"./unit/properties",

	"./plural"
], function( Globalize, runtimeBind, validateParameterPresence, validateParameterTypeNumber,
	validateParameterTypePlainObject, validateParameterTypeString, unitFormatterFn,
	unitProperties ) {

/**
 * Globalize.formatUnit( value, unit, options )
 *
 * @value [Number]
 *
 * @unit [String]: The unit (e.g "second", "day", "year")
 *
 * @options [Object]
 * - form: [String] "long", "short" (default), or "narrow".
 *
 * Format units such as seconds, minutes, days, weeks, etc.
 */
Globalize.formatUnit =
Globalize.prototype.formatUnit = function( value, unit, options ) {
	validateParameterPresence( value, "value" );
	validateParameterTypeNumber( value, "value" );

	return this.unitFormatter( unit, options )( value );
};

/**
 * Globalize.unitFormatter( unit, options )
 *
 * @unit [String]: The unit (e.g "second", "day", "year")
 *
 * @options [Object]
 * - form: [String] "long", "short" (default), or "narrow".
 */
Globalize.unitFormatter =
Globalize.prototype.unitFormatter = function( unit, options ) {
	var args, form, pluralGenerator, returnFn, properties;

	validateParameterPresence( unit, "unit" );
	validateParameterTypeString( unit, "unit" );

	validateParameterPresence( options, "options" );
	validateParameterTypePlainObject( options, "options" );

	args = [ unit, options ];
	form = options.form || "long";
	properties = unitProperties( unit, form, this.cldr );

	pluralGenerator = this.pluralGenerator();
	returnFn = unitFormatterFn( properties, pluralGenerator );

	runtimeBind( args, this.cldr, returnFn, [ pluralGenerator, properties ] );

	return returnFn;
};

return Globalize;

});