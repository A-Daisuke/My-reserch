const Benchmark = {
    run: function() {
        var VAR_1 = 1000,
          VAR_2 = 123456789;
        VAR_3 = function () {
          _results = [];
          for (
            var VAR_4 = VAR_2, VAR_5 = VAR_2 + VAR_1;
            VAR_2 <= VAR_5 ? VAR_4 < VAR_5 : VAR_4 > VAR_5;
            VAR_2 <= VAR_5 ? VAR_4++ : VAR_4--
          ) {
            _results.push(VAR_4);
          }
          return _results;
        }.apply(this);
    }
};