const Benchmark = {
    run: function() {
        function FUNCTION_2() {
          var VAR_2 = Math.floor(Math.random() * arguments.length);
          return arguments[VAR_2];
        }
        function FUNCTION_1() {
          return Array.prototype.slice.call(arguments, 1).sort(function () {
            return 0.5 - Math.random();
          })[0];
        }
        FUNCTION_2(
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        );
    }
};