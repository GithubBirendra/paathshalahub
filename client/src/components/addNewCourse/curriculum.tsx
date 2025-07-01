'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Download, Trash2, Video } from 'lucide-react';

type Lecture = {
  _id: string;
  title: string;
  isFreePreview: boolean;
  hasVideo: boolean;
};

export default function Curriculum() {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  //Fetch lectures on load
  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const res = await axios.get(process.env.NEXT_PUBLIC_API_URL+'/lecture');
        setLectures(res.data);
      } catch (err) {
        console.error('Failed to fetch lectures:', err);
      }
    };
    fetchLectures();
  }, []);

  // Update lecture in DB
  const updateLecture = async (id: string, updatedFields: Partial<Lecture>) => {
    try {
      const lectureToUpdate = lectures.find((l) => l._id === id);
      const res = await axios.put(process.env.NEXT_PUBLIC_API_URL+`/lecture/${id}`, {
        ...lectureToUpdate,
        ...updatedFields,
      });
      setLectures(lectures.map((l) => (l._id === id ? res.data : l)));
    } catch (err) {
      console.error('Failed to update lecture:', err);
    }
  };

  // POST new lecture
  const addNewLecture = async () => {
    try {
      const res = await axios.post(process.env.NEXT_PUBLIC_API_URL+'/lecture', {
        title: 'Untitled Lecture',
        isFreePreview: false,
        hasVideo: false,
      });
      setLectures([...lectures, res.data]);
    } catch (err) {
      console.error('Failed to add lecture:', err);
    }
  };

  // Update lecture title
  const updateLectureTitle = (id: string, title: string) => {
    updateLecture(id, { title });
  };

  // Toggle free preview in DB
  const toggleFreePreview = (id: string) => {
    const current = lectures.find((l) => l._id === id);
    if (current) {
      updateLecture(id, { isFreePreview: !current.isFreePreview });
    }
  };

  // Simulate video upload
  const handleVideoUpload = (id: string) => {
    updateLecture(id, { hasVideo: true });
  };

  // Delete lecture from DB
  const deleteLecture = async (id: string) => {
    try {
      await axios.delete(process.env.NEXT_PUBLIC_API_URL+`/lecture/${id}`);
      setLectures(lectures.filter((l) => l._id !== id));
    } catch (err) {
      console.error('Failed to delete lecture:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Create Course Curriculum</h2>
        <Button onClick={addNewLecture} className="bg-blue-600 hover:bg-blue-700">
          Add lecture
        </Button>
      </div>

      <div className="space-y-4">
        {lectures.map((lecture, index) => (
          <div key={lecture._id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-medium text-gray-700">Lecture {index + 1}</span>
              <Input
                value={lecture.title}
                onChange={(e) => updateLectureTitle(lecture._id, e.target.value)}
                placeholder="Enter lecture title"
                className="flex-1"
              />
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`free-preview-${lecture._id}`}
                  checked={lecture.isFreePreview}
                  onCheckedChange={() => toggleFreePreview(lecture._id)}
                />
                <label
                  htmlFor={`free-preview-${lecture._id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Free Preview
                </label>
              </div>
            </div>

            {lecture.hasVideo ? (
              <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md mb-4">
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Video uploaded</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            ) : null}

            <div className="flex gap-3">
              <Button variant="outline" className="gap-2" onClick={() => handleVideoUpload(lecture._id)}>
                <Video className="h-4 w-4" />
                {lecture.hasVideo ? 'Replace Video' : 'Upload Video'}
              </Button>
              <Button
                variant="outline"
                className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={() => deleteLecture(lecture._id)}
              >
                <Trash2 className="h-4 w-4" />
                Delete Lecture
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}