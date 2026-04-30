const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4323, 534, 23, 6, 6345, 63456456, 546];
        for (var VAR_4 = 0; VAR_4 < VAR_1.length; VAR_4++)
          if (VAR_1[VAR_4] == 6345) break;
          else console.log(VAR_1[VAR_4]);
    }
};