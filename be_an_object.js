Screw.Matchers["be_object"] = 
Screw.Matchers["be_a_object"] = 
Screw.Matchers["be_an_object"] = 
{
  match: function(expected, actual) {
    return (typeof(actual) == "object");
  },

  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be an object.';
  }
}
