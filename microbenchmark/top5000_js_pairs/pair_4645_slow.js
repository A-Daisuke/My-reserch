const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1(VAR_2, VAR_3) {
          this.VAR_4 = VAR_2;
          this.VAR_5 = VAR_3;
          this.VAR_6 = FUNCTION_2;
          this.VAR_7 = FUNCTION_3;
          this.VAR_8 = FUNCTION_4;
          function FUNCTION_2() {}
          function FUNCTION_3() {}
          function FUNCTION_4() {}
        }
        VAR_1.push(new FUNCTION_1("charles", "xavier"));
    }
};