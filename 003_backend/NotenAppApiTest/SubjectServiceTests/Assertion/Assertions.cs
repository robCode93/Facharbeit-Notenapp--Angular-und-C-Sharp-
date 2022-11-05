using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using web_api.Models.DetailModels;

namespace NotenAppApiTest.SubjectServiceTests.Assertion
{
    public static class Assertions
    {
        public static SubjectDetailsAssertions Should(this SubjectDetails subjectDetails) => new SubjectDetailsAssertions(subjectDetails);

        public static SchoolYearDetailsAssertions Should(this SchoolYearDetails schoolYearDetails) => new SchoolYearDetailsAssertions(schoolYearDetails);

        public static GradDetailsAssertions Should(this GradDetails gradDetails) => new GradDetailsAssertions(gradDetails);

        public static SchoolDetailsAssertions Should(this SchoolDetails schoolDetails) => new SchoolDetailsAssertions(schoolDetails);

        public static HolidayDetailsAssertions Should(this HolidayDetails holidayDetails) => new HolidayDetailsAssertions(holidayDetails);
    }
}
