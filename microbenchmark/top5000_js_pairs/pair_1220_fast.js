const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_3 = 0;
        var VAR_2 = [];
        __loop: while (true) {
          if (!VAR_1) break;
          VAR_2.push(VAR_3++);
          VAR_1--;
          continue __loop;
        }
    }
};