Screw.Matchers["be_number"] = 
Screw.Matchers["be_a_number"] = 
{
  match: function(expected, actual) {
    return (typeof(actual) == "number");
  },

  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be a number.';
  }
}