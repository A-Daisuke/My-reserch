const Benchmark = {
    run: function() {
        var VAR_3 = [];
        var VAR_4 = new Array(2000);
        var VAR_5 = VAR_4.length;
        while (VAR_5--) {
          VAR_3.push(VAR_4.pop());
        }
    }
};