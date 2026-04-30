const Benchmark = {
    run: function() {
        var VAR_1 = [1, 2, 3, 4323, 534, 23, 6, 6345, 63456456, 546];
        try {
          VAR_1.forEach(function (VAR_2) {
            if (VAR_2 == 6345) throw new Error();
            else console.log(VAR_2);
          });
        } catch (VAR_3) {}
    }
};