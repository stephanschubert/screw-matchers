Screw.Matchers["be_string"] = 
Screw.Matchers["be_a_string"] = 
{
  match: function(expected, actual) {
    return (typeof(actual) == "string");
  },

  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be a string.';
  }
}
