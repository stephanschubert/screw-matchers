Screw.Matchers["be_typeof"] =
Screw.Matchers["be_type_of"] =
Screw.Matchers["be_a_typeof"] =
Screw.Matchers["be_a_type_of"] =
{
  match: function(expected, actual) {
    return (typeof(actual) == "expected");
  },

  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be a type of ' + $.print(actual);  
  }
}