const Benchmark = {
    run: function() {
        const FUNCTION_2 = (VAR_2, VAR_3, VAR_4, VAR_5) => {
          switch (VAR_5) {
            case 0:
              return VAR_4;
            case 1:
              return VAR_3;
            case 2:
              return VAR_2;
            default:
              return FUNCTION_2(VAR_2 + 2 * VAR_3 + 3 * VAR_4, VAR_2, VAR_3, VAR_5 - 1);
          }
        };
        const FUNCTION_3 = (VAR_6) => FUNCTION_2(2, 1, 0, VAR_6);
        FUNCTION_3(25);
    }
};