Screw.Matchers["be_function"] = 
Screw.Matchers["be_a_function"] = 
{
  match: function(expected, actual) {
    return (typeof(actual) == "function");
  },

  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be a function.';
  }
}
