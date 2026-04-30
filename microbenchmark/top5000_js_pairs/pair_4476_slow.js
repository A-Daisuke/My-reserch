const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = "dfv";
          this.VAR_2 = "dfv";
          this.VAR_3 = "dfv";
          this.VAR_4 = "dfv";
          return this;
        }
        for (var VAR_5 = 0; VAR_5 < 1000; VAR_5++) FUNCTION_1.call({});
    }
};