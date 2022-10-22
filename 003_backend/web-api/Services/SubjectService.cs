using Microsoft.EntityFrameworkCore;
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

        public ResponseModel AddGradToSubject(Guid subjectId, Grad gradModel)
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

                if (subject.Grads.Any(g => g.Id == gradModel.Id))
                {
                    model.IsSuccess = true;
                    model.Message = "Grad already added to Subject";
                    return model;
                }

                subject.Grads.Add(gradModel);
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

        public List<Subject>? GetAllSubjects()
        {
            return _context.Subjects.ToList();
        }

        public Subject? GetSubjectById(Guid subjectId)
        {
            return _context.Subjects.FirstOrDefault(s => s.Id == subjectId);
        }

        public ResponseModel SaveSubject(Subject subjectModel)
        {
            ResponseModel model = new ResponseModel();

            try
            {
                var subject = _context.Subjects.FirstOrDefault(s => s.Id == subjectModel.Id);

                if(subject != null)
                {
                    subject.Grads = subjectModel.Grads;
                    subject.Name = subjectModel.Name;
                    subject.ShortName = subjectModel.ShortName;
                    
                    _context.Update(subject);
                    model.IsSuccess = true;
                    model.Message = "Subject updated successfully";
                }
                else
                {
                    _context.Subjects.Add(subjectModel);
                    model.IsSuccess = true;
                    model.Message = "Subject added successfully";
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

        public List<GradDetails> GetGradsOfSubject(Guid subjectId)
        {
            List<GradDetails> detailList;

            try
            {
                detailList = new List<GradDetails>();
                var subject = _context.Subjects.FirstOrDefault(s => s.Id == subjectId);

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
    }
}
