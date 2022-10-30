using Microsoft.EntityFrameworkCore;
using web_api.CRUDModels;
using web_api.Models;
using web_api.Models.DetailModels;
using web_api.Services.ServiceInterfaces;

namespace web_api.Services
{
    public class SubjectService : ISubjectService
    {

        WebAppContext _context;

        public SubjectService(WebAppContext context)
        {
            _context = context;
        }

        public ResponseModel AddGradToSubject(Guid subjectId, Guid gradId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var subject = _context.Subjects.Include(s => s.Grads).SingleOrDefault(s => s.Id == subjectId);

                if (subject == null)
                {
                    model.IsSuccess = false;
                    model.Message = "Subject not found";
                    return model;
                }

                if (subject.Grads.Any(g => g.Id == gradId))
                {
                    model.IsSuccess = true;
                    model.Message = "Grad already added to Subject";
                    return model;
                }

                subject.Grads.Add(_context.Grads.FirstOrDefault(g => g.Id == gradId));
                model.IsSuccess = true;
                model.Message = "Grad added to Subject successfully";

                _context.SaveChanges();


            }
            catch (Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;
        }

        public ResponseModel DeleteSubject(Guid subjectId)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var subject = _context.Subjects.SingleOrDefault(s => s.Id == subjectId);

                if(subject != null)
                {
                    _context.Subjects.Remove(subject);
                    model.IsSuccess = true;
                    model.Message = "Subject removed successfully";
                }
                else
                {
                    model.IsSuccess = false;
                    model.Message = "Subject not found";
                }
            }
            catch(Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            _context.SaveChanges();
            return model;
        }

        public List<SubjectDetails>? GetAllSubjects()
        {
            List<SubjectDetails> detailsList = new List<SubjectDetails>();

            var allSubjects = _context.Subjects.Include(s => s.Grads).ToList();

            foreach(Subject subject in allSubjects)
            {
                SubjectDetails details = new SubjectDetails();
                details.Id = subject.Id;
                details.Name = subject.Name;
                details.ShortName = subject.ShortName;

                if(subject.Grads != null)
                {
                    foreach (Grad grad in subject.Grads)
                    {
                        GradDetails gradDetails = new GradDetails();
                        gradDetails.Id = grad.Id;
                        gradDetails.Name = grad.Name;
                        gradDetails.Date = grad.Date;
                        gradDetails.Points = grad.Points;

                        details.Grads.Add(gradDetails);
                    }
                }

                detailsList.Add(details);

            }

            return detailsList;
        }

        public SubjectDetails? GetSubjectById(Guid subjectId)
        {
            var subject = _context.Subjects.Include(s => s.Grads).FirstOrDefault(s => s.Id == subjectId);

            if(subject == null)
            {
                return null;
            }

            SubjectDetails details = new SubjectDetails();

            details.Id = subject.Id;
            details.Name = subject.Name;
            details.ShortName = subject.ShortName;

            if (subject.Grads != null)
            {
                foreach (Grad grad in subject.Grads)
                {
                    GradDetails gradDetails = new GradDetails();
                    gradDetails.Id = grad.Id;
                    gradDetails.Name = grad.Name;
                    gradDetails.Date = grad.Date;
                    gradDetails.Points = grad.Points;

                    details.Grads.Add(gradDetails);
                }
            }

            return details;

        }

        public List<GradDetails> GetGradsOfSubject(Guid subjectId)
        {
            List<GradDetails> detailList;

            try
            {
                detailList = new List<GradDetails>();
                var subject = _context.Subjects.Include(s => s.Grads).FirstOrDefault(s => s.Id == subjectId);

                if(subject != null)
                {
                    if(subject.Grads != null)
                    {
                        foreach(Grad grad in subject.Grads)
                        {
                            GradDetails details = new GradDetails();
                            details.Name = grad.Name;
                            details.Id = grad.Id;
                            details.Date = grad.Date;
                            details.Weight = grad.Weight;
                            details.Points = details.Points;
                            
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


        public ResponseModel CreateSubject(CreateSubjectModel createModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                Subject subject = new Subject();

                subject.Name = createModel.Name;
                subject.ShortName = createModel.ShortName;
                subject.subjectId = createModel.SubjectId;
                subject.SchoolYear = _context.SchoolYears.FirstOrDefault(sy => sy.Id == createModel.SchoolYear);

                if(createModel.Grads != null)
                {
                    foreach(Guid gradId in createModel.Grads)
                    {
                        subject.Grads.Add(_context.Grads.FirstOrDefault(g => g.Id == gradId));
                    }
                }

                _context.Subjects.Add(subject);
                _context.SaveChanges();

                model.IsSuccess = true;
                model.Message = "Subject added successfully";

            }
            catch(Exception ex)
            {
                model.IsSuccess = false;
                model.Message = "Error : " + ex.Message;
            }

            return model;
        }

        public ResponseModel UpdateSubject(Guid subjectId, UpdateSubjectModel updateModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var _temp = _context.Subjects.Include(s => s.Grads).FirstOrDefault(s => s.Id == subjectId);

                if(_temp == null)
                {
                    model.IsSuccess = false;
                    model.Message = "Subject not found";
                }

                _temp.Name = updateModel.Name;
                _temp.ShortName = updateModel.ShortName;
                _temp.subjectId = updateModel.SubjectId;
                _temp.SchoolYear = _context.SchoolYears.FirstOrDefault(sy => sy.Id == updateModel.SchoolYear);

                if (updateModel.Grads == null)
                {
                    _temp.Grads.Clear();
                }
                else
                {
                    _temp.Grads.Clear();
                    foreach (Guid gradId in updateModel.Grads)
                    {
                        _temp.Grads.Add(_context.Grads.FirstOrDefault(g => g.Id == gradId));
                    }
                }

                _context.Update(_temp);
                _context.SaveChanges();

                model.IsSuccess = true;
                model.Message = "";
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
