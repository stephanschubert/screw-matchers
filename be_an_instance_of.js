Screw.Matchers["be_an_instance_of"] = 
Screw.Matchers["be_a_instance_of"] =
{
  match: function(expected, actual) {
    return (actual instanceof expected);
  },

  failure_message: function(expected, actual, not) {
    return 'expected ' + $.print(actual) + (not ? ' not' : '') + ' to be an instance of ' + $.print(actual);
  }

}