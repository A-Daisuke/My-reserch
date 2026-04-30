const Benchmark = {
    run: function() {
        void (function () {
          var VAR_1 = eval("this");
          for (var VAR_2 = 0, VAR_3 = 0; VAR_2 < 10000; VAR_3 += VAR_2++);
          return VAR_3;
        })();
    }
};