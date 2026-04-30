const Benchmark = {
    run: function() {
        void (function () {
          for (var VAR_1 = 0, VAR_2 = 0; VAR_1 < 10000; VAR_2 += VAR_1++);
          eval("var a=" + VAR_2);
          return a;
        })();
    }
};