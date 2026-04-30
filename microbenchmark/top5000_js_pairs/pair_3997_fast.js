const Benchmark = {
    run: function() {
        var VAR_1 = [
          {
            KEY_1: function () {},
          },
          {
            KEY_2: function () {},
          },
        ];
        for (var VAR_2 = 0, VAR_3 = VAR_1.length; VAR_2 < VAR_3; ++VAR_2) {
          var VAR_6 = VAR_1[VAR_2];
          if (VAR_6.KEY_1 instanceof Function) VAR_6.KEY_1();
        }
    }
};