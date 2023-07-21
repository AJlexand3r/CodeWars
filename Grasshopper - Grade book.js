function getGrade (s1, s2, s3) {
    if ((s1 + s2 + s3) / 3 >= 90) {
      return 'A'
    } else if ( (s1 + s2 + s3) / 3 >= 80 ){
      return 'B'
    } else if ( (s1 + s2 + s3) / 3 >= 70  ){
      return 'C'
    } else if ( (s1 + s2 + s3) / 3 >= 60 ) {
      return 'D'
    } else {
      return 'F'
    }
  }