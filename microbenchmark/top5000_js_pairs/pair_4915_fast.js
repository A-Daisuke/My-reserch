const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          throw new Error("Hmm");
        }
        var VAR_2 = new Error("Fastr");
        function FUNCTION_2() {
          throw myFastError;
        }
        function FUNCTION_3() {
          return "yes";
        }
        FUNCTION_3();
    }
};