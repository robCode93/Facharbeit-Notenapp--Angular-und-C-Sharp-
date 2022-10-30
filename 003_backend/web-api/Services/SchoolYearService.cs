using Microsoft.EntityFrameworkCore;
using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class SchoolYearService : ISchoolYearService
    {

        WebAppContext _context;

        public SchoolYearService(WebAppContext context)
        {
            _context = context;
        }

        public ResponseModel AddSubjectToSchoolYear(Guid schoolYearId, Guid subjectId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                // Schoolyear inklusive der Subjects in Variable laden
                var schoolYear = _context.SchoolYears.Include(sy => sy.Subjects).SingleOrDefault(sy => sy.Id == schoolYearId);

                // Ist das SchoolYear nicht vorhanden? 
                if(schoolYear == null)
                {
                    model.IsSuccess = false;
                    model.Message = "SchoolYear not found";
                    return model;
                }

                // Ist das Subject schon Teil der Liste?
                if(schoolYear.Subjects.Any(s => s.Id == subjectId))
                {
                    model.IsSuccess = true;
                    model.Message = "Subject already added to SchoolYear";
                    return model;
                }

                // Subject vorladen in Variable
                var subject = _context.Subjects.SingleOrDefault(s => s.Id == subjectId);

                // Gibt es das Subject nicht?
                if(subject == null)
                {
                    model.IsSuccess = false;
                    model.Message = "Subject not found";
                    return model;
                }

                schoolYear.Subjects.Add(subject);
                model.IsSuccess = true;
                model.Message = "Subject added to SchoolYear successfully";

                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;   
        }

        public ResponseModel DeleteSchoolYear(Guid schoolYearId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var schoolYear = _context.SchoolYears.FirstOrDefault(sy => sy.Id == schoolYearId);

                if(schoolYear != null)
                {
                    _context.SchoolYears.Remove(schoolYear);
                    model.IsSuccess = true;
                    model.Message = "SchoolYear removed successfully";
                }
                else
                {
                    model.IsSuccess = false;
                    model.Message = "SchoolYear not found";
                }
            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            _context.SaveChanges();
            return model;
        }

        public List<SchoolYearDetails> GetAllSchoolYears()
        {
            var schoolYears = _context.SchoolYears.Include(s => s.Subjects).Include(s => s.School).ToList();

            List<SchoolYearDetails> detailList = new List<SchoolYearDetails>();

            foreach(SchoolYear schoolYear in schoolYears)
            {
                SchoolYearDetails details = new SchoolYearDetails();
                details.Name = schoolYear.Name;
                details.Id = schoolYear.Id;

                SchoolDetails schoolDetails = new SchoolDetails();
                schoolDetails.Id = schoolYear.School.Id;
                schoolDetails.Name = schoolYear.School.Name;

                foreach(Subject subject in schoolYear.Subjects)
                {
                    SubjectDetails subjectDetails = new SubjectDetails();
                    subjectDetails.Id = subject.Id;
                    subjectDetails.Name = subject.Name;
                    subjectDetails.ShortName = subject.ShortName;

                    details.Subjects.Add(subjectDetails);
                }

                detailList.Add(details);
            }

            return detailList;
        }

        public SchoolYearDetails? GetSchoolYearById(Guid schoolYearId)
        {
            var schoolYear = _context.SchoolYears.Include(sy => sy.Subjects).Include(sy => sy.School).FirstOrDefault(sy => sy.Id == schoolYearId);

            if(schoolYear == null)
            {
                return null;
            }

            SchoolYearDetails details = new SchoolYearDetails();
            details.Name = schoolYear.Name;
            details.Id = schoolYear.Id;

            SchoolDetails schoolDetails = new SchoolDetails();
            schoolDetails.Id = schoolYear.School.Id;
            schoolDetails.Name = schoolYear.School.Name;

            foreach (Subject subject in schoolYear.Subjects)
            {
                SubjectDetails subjectDetails = new SubjectDetails();
                subjectDetails.Id = subject.Id;
                subjectDetails.Name = subject.Name;
                subjectDetails.ShortName = subject.ShortName;

                details.Subjects.Add(subjectDetails);
            }

            return details;

        }

        public List<SubjectDetails> GetSubjectsOfSchoolYear(Guid schoolYearId)
        {
            List<SubjectDetails> detailList;

            try
            {
                detailList = new List<SubjectDetails>();
                var schoolYear = _context.SchoolYears.Include(sy => sy.Subjects).FirstOrDefault(sy => sy.Id == schoolYearId);

                if(schoolYear != null)
                {
                    if(schoolYear.Subjects != null)
                    {
                        foreach(Subject subject in schoolYear.Subjects)
                        {
                            SubjectDetails details = new SubjectDetails();
                            details.Id = subject.Id;
                            details.ShortName = subject.ShortName;
                            details.Name = subject.Name;
                            
                            detailList.Add(details);
                        }
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }

            return detailList;
        }

        

        public ResponseModel CreateSchoolYear(CreateSchoolYearModel createModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                SchoolYear schoolYear = new SchoolYear();
                schoolYear.Name = createModel.Name;
                schoolYear.School = _context.Schools.FirstOrDefault(s => s.Id == createModel.School);

                if(createModel.Subjects != null)
                {
                    foreach(Guid subjectId in createModel.Subjects)
                    {
                        schoolYear.Subjects.Add(_context.Subjects.FirstOrDefault(s => s.Id == subjectId));
                    }
                }

                _context.SchoolYears.Add(schoolYear);
                _context.SaveChanges();

                model.IsSuccess = true;
                model.Message = "Schoolyear added successfully";


            }
            catch(Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;
        }

        public ResponseModel UpdateSchoolYear(Guid schoolYearId, UpdateSchoolYearModel updateModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var _temp = _context.SchoolYears.Include(sy => sy.School).Include(sy => sy.Subjects).FirstOrDefault(sy => sy.Id == schoolYearId);

                if(_temp == null)
                {
                    model.IsSuccess = false;
                    model.Message = "SchoolYear not found";
                    return model;
                }

                _temp.Name = updateModel.Name;
                _temp.School = _context.Schools.FirstOrDefault(s => s.Id == updateModel.School);

                if(updateModel.Subjects == null)
                {
                    _temp.Subjects.Clear();
                }
                else
                {
                    _temp.Subjects.Clear();
                    foreach(Guid subjectId in updateModel.Subjects)
                    {
                        _temp.Subjects.Add(_context.Subjects.FirstOrDefault(s => s.Id == subjectId));
                    }
                }

                _context.Update(_temp);
                _context.SaveChanges();

                model.IsSuccess = true;
                model.Message = "Schoolyear updated successfully";

            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;
        }
    }
}
