const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
        }
        try {
          throw new Error("foo");
        } catch (VAR_3) {}
    }
};