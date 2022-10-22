using Microsoft.EntityFrameworkCore;
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

        public List<SchoolYear>? GetAllSchoolYears()
        {
            return _context.SchoolYears.ToList();
        }

        public SchoolYear? GetSchoolYearById(Guid schoolYearId)
        {
            return _context.SchoolYears.FirstOrDefault(sy => sy.Id == schoolYearId);
        }

        public ResponseModel SaveSchoolYear(SchoolYear schoolYearModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var schoolYear = _context.SchoolYears.FirstOrDefault(sy => sy.Id == schoolYearModel.Id);

                if(schoolYear != null)
                {
                    schoolYear.School = schoolYearModel.School;
                    schoolYear.Name = schoolYearModel.Name;
                    schoolYear.Subjects = schoolYearModel.Subjects;

                    _context.Update(schoolYear);
                    model.IsSuccess = true;
                    model.Message = "SchoolYear updated successfully";
                }
                else
                {
                    _context.SchoolYears.Add(schoolYearModel);
                    model.IsSuccess = true;
                    model.Message = "SchoolYear added successfully";
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

        public List<SubjectDetails> GetSubjectsOfSchoolYear(Guid schoolYearId)
        {
            List<SubjectDetails> detailList;

            try
            {
                detailList = new List<SubjectDetails>();
                var schoolYear = _context.SchoolYears.FirstOrDefault(sy => sy.Id == schoolYearId);

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
    }
}
