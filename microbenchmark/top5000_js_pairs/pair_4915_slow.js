const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1() {
          throw new Error("Hmm");
        }
        var VAR_2 = new Error("Fastr");
        function FUNCTION_2() {
          throw myFastError;
        }
        try {
          doItLater();
        } catch (VAR_3) {
          VAR_1.push(VAR_3);
        }
    }
};