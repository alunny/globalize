define([
	"cldr",
	"src/core",
	"src/unit/format",
	"json!cldr-data/main/en/units.json",
	"json!cldr-data/supplemental/likelySubtags.json"
], function( Cldr, Globalize, formatUnit, enUnits, likelySubtags ) {

var cldr, globalize;

Cldr.load( enUnits );
Cldr.load( likelySubtags );

globalize = new Globalize( "en" );
cldr = globalize.cldr;

QUnit.module( "Unit Format" );

function oneOrOtherPluralGenerator( plural ) {
  if ( plural === 1 ) {
    return "one";
  } else {
    return "other";
  }
}

QUnit.assert.unitFormat = function ( value, unit, options, expected ) {
	this.equal(
    formatUnit( value, unit, options, oneOrOtherPluralGenerator, cldr, globalize ),
    expected
	);
};

QUnit.test( "Default form (long)", function( assert ) {
	assert.unitFormat( 1, "millisecond", {}, "1 millisecond" );
	assert.unitFormat( 2, "millisecond", {}, "2 milliseconds" );
	assert.unitFormat( 1, "second", {}, "1 second" );
	assert.unitFormat( 2, "second", {}, "2 seconds" );
	assert.unitFormat( 1, "minute", {}, "1 minute" );
	assert.unitFormat( 2, "minute", {}, "2 minutes" );
	assert.unitFormat( 1, "hour", {}, "1 hour" );
	assert.unitFormat( 2, "hour", {}, "2 hours" );
	assert.unitFormat( 1, "day", {}, "1 day" );
	assert.unitFormat( 2, "day", {}, "2 days" );
	assert.unitFormat( 1, "week", {}, "1 week" );
	assert.unitFormat( 2, "week", {}, "2 weeks" );
	assert.unitFormat( 1, "month", {}, "1 month" );
	assert.unitFormat( 2, "month", {}, "2 months" );
	assert.unitFormat( 1, "year", {}, "1 year" );
	assert.unitFormat( 2, "year", {}, "2 years" );
});

QUnit.test( "Long form", function( assert ) {
	assert.unitFormat( 1, "millisecond", { form: "long" }, "1 millisecond" );
	assert.unitFormat( 2, "millisecond", { form: "long" }, "2 milliseconds" );
	assert.unitFormat( 1, "second", { form: "long" }, "1 second" );
	assert.unitFormat( 2, "second", { form: "long" }, "2 seconds" );
	assert.unitFormat( 1, "minute", { form: "long" }, "1 minute" );
	assert.unitFormat( 2, "minute", { form: "long" }, "2 minutes" );
	assert.unitFormat( 1, "hour", { form: "long" }, "1 hour" );
	assert.unitFormat( 2, "hour", { form: "long" }, "2 hours" );
	assert.unitFormat( 1, "day", { form: "long" }, "1 day" );
	assert.unitFormat( 2, "day", { form: "long" }, "2 days" );
	assert.unitFormat( 1, "week", { form: "long" }, "1 week" );
	assert.unitFormat( 2, "week", { form: "long" }, "2 weeks" );
	assert.unitFormat( 1, "month", { form: "long" }, "1 month" );
	assert.unitFormat( 2, "month", { form: "long" }, "2 months" );
	assert.unitFormat( 1, "year", { form: "long" }, "1 year" );
	assert.unitFormat( 2, "year", { form: "long" }, "2 years" );
});

QUnit.test( "Short form", function( assert ) {
	assert.unitFormat( 1, "millisecond", { form: "short" }, "1 ms" );
	assert.unitFormat( 2, "millisecond", { form: "short" }, "2 ms" );
	assert.unitFormat( 1, "second", { form: "short" }, "1 sec" );
	assert.unitFormat( 2, "second", { form: "short" }, "2 sec" );
	assert.unitFormat( 1, "minute", { form: "short" }, "1 min" );
	assert.unitFormat( 2, "minute", { form: "short" }, "2 min" );
	assert.unitFormat( 1, "hour", { form: "short" }, "1 hr" );
	assert.unitFormat( 2, "hour", { form: "short" }, "2 hr" );
	assert.unitFormat( 1, "day", { form: "short" }, "1 day" );
	assert.unitFormat( 2, "day", { form: "short" }, "2 days" );
	assert.unitFormat( 1, "week", { form: "short" }, "1 wk" );
	assert.unitFormat( 2, "week", { form: "short" }, "2 wks" );
	assert.unitFormat( 1, "month", { form: "short" }, "1 mth" );
	assert.unitFormat( 2, "month", { form: "short" }, "2 mths" );
	assert.unitFormat( 1, "year", { form: "short" }, "1 yr" );
	assert.unitFormat( 2, "year", { form: "short" }, "2 yrs" );
});

QUnit.test( "Narrow form", function( assert ) {
	assert.unitFormat( 1, "millisecond", { form: "narrow" }, "1ms" );
	assert.unitFormat( 2, "millisecond", { form: "narrow" }, "2ms" );
	assert.unitFormat( 1, "second", { form: "narrow" }, "1s" );
	assert.unitFormat( 2, "second", { form: "narrow" }, "2s" );
	assert.unitFormat( 1, "minute", { form: "narrow" }, "1m" );
	assert.unitFormat( 2, "minute", { form: "narrow" }, "2m" );
	assert.unitFormat( 1, "hour", { form: "narrow" }, "1h" );
	assert.unitFormat( 2, "hour", { form: "narrow" }, "2h" );
	assert.unitFormat( 1, "day", { form: "narrow" }, "1d" );
	assert.unitFormat( 2, "day", { form: "narrow" }, "2d" );
	assert.unitFormat( 1, "week", { form: "narrow" }, "1w" );
	assert.unitFormat( 2, "week", { form: "narrow" }, "2w" );
	assert.unitFormat( 1, "month", { form: "narrow" }, "1m" );
	assert.unitFormat( 2, "month", { form: "narrow" }, "2m" );
	assert.unitFormat( 1, "year", { form: "narrow" }, "1y" );
	assert.unitFormat( 2, "year", { form: "narrow" }, "2y" );
});

});
