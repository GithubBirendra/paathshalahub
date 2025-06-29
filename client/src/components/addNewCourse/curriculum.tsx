'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Download, Trash2, Video } from 'lucide-react';
import { useState } from 'react';

export default function Curriculum() {
  const [lectures, setLectures] = useState([
    { 
      id: 1, 
      title: 'Introduction', 
      isFreePreview: true,
      hasVideo: true
    },
  ]);

  const addNewLecture = () => {
    const newId = lectures.length > 0 ? Math.max(...lectures.map(l => l.id)) + 1 : 1;
    setLectures([
      ...lectures, 
      { 
        id: newId, 
        title: '', 
        isFreePreview: false,
        hasVideo: false
      }
    ]);
  };

  const updateLectureTitle = (id: number, title: string) => {
    setLectures(lectures.map(lecture => 
      lecture.id === id ? { ...lecture, title } : lecture
    ));
  };

  const toggleFreePreview = (id: number) => {
    setLectures(lectures.map(lecture => 
      lecture.id === id ? { ...lecture, isFreePreview: !lecture.isFreePreview } : lecture
    ));
  };

  const handleVideoUpload = (id: number) => {
    setLectures(lectures.map(lecture => 
      lecture.id === id ? { ...lecture, hasVideo: true } : lecture
    ));
  };

  const deleteLecture = (id: number) => {
    setLectures(lectures.filter(lecture => lecture.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Create Course Curriculum</h2>
        <Button 
          onClick={addNewLecture}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Add lecture
        </Button>
      </div>

      <div className="space-y-4">
        {lectures.map((lecture) => (
          <div key={lecture.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-medium text-gray-700">Lecture {lecture.id}</span>
              <Input
                value={lecture.title}
                onChange={(e) => updateLectureTitle(lecture.id, e.target.value)}
                placeholder="Enter lecture title"
                className="flex-1"
              />
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={`free-preview-${lecture.id}`}
                  checked={lecture.isFreePreview}
                  onCheckedChange={() => toggleFreePreview(lecture.id)}
                />
                <label 
                  htmlFor={`free-preview-${lecture.id}`}
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
              <Button 
                variant="outline" 
                className="gap-2"
                onClick={() => handleVideoUpload(lecture.id)}
              >
                <Video className="h-4 w-4" />
                {lecture.hasVideo ? 'Replace Video' : 'Upload Video'}
              </Button>
              <Button 
                variant="outline" 
                className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={() => deleteLecture(lecture.id)}
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