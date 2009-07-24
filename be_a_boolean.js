Screw.Matchers["be_boolean"] = 
Screw.Matchers["be_a_boolean"] = 
{
  match: function(expected, actual) {
    return (typeof(actual) == "boolean");
  },

  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be a boolean.';
  }
}
