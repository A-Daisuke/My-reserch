const Benchmark = {
    run: function() {
        void (function () {
          eval("var a=123");
          for (var VAR_1 = 0, VAR_2 = 0; VAR_1 < 10000; VAR_2 += VAR_1++);
          return VAR_2;
        })();
    }
};