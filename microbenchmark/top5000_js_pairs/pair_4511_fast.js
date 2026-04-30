const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (VAR_2 = 1; VAR_2 <= 10000; VAR_2++) {
          VAR_1.push(VAR_2);
        }
        var VAR_3 = 0;
        for (
          var VAR_5 = VAR_1,
            VAR_6 = Array.isArray(VAR_5),
            VAR_7 = 0,
            VAR_8 = VAR_6 ? VAR_5 : VAR_5[Symbol.iterator]();
          ;

        ) {
          var VAR_9;
          if (VAR_6) {
            if (VAR_7 >= VAR_5.length) break;
            VAR_9 = VAR_5[VAR_7++];
          } else {
            VAR_7 = VAR_5.next();
            if (VAR_7.done) break;
            VAR_9 = VAR_7.VAR_10;
          }
          var VAR_10 = VAR_9;
          VAR_3 += Math.sqrt(VAR_10);
        }
    }
};