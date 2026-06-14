"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Shield,
  Clock,
  User,
  Mail,
  Phone,
  Home,
  Camera,
  Upload,
  Check,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  pageSpring,
  layoutSpring,
  microSpring,
  buttonHover,
  bounceSpring,
} from "@/lib/animations";

// ============================================
// Form Types
// ============================================

interface FormData {
  // Step 1: Basic Info
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;

  // Step 2: Project Details
  chargerType: string;
  chargerBrand: string;
  parkingLocation: string;
  panelCapacity: string;
  spareBreakers: string;
  wireRunEstimate: string;
  needsPanelUpgrade: string;
  preferredTimeline: string;
  notes: string;

  // Step 3: Photos & Notes
  panelPhotos: string[];
  parkingPhotos: string[];
  additionalNotes: string;
  howDidYouHear: string;
}

interface FormErrors {
  [key: string]: string;
}

// ============================================
// Step Indicator
// ============================================

function StepIndicator({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mb-12">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isActive = step === currentStep;
        const isCompleted = step < currentStep;

        return (
          <div key={step} className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-heading text-sm font-medium transition-colors",
                  isActive && "bg-primary text-text-inverse",
                  isCompleted && "bg-success text-text-inverse",
                  !isActive && !isCompleted && "bg-background-alt text-text-muted border border-text-muted/20"
                )}
              >
                {isCompleted ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step
                )}
              </div>
              <span
                className={cn(
                  "mt-2 font-body text-xs",
                  isActive && "text-primary font-medium",
                  isCompleted && "text-success",
                  !isActive && !isCompleted && "text-text-muted"
                )}
              >
                {step === 1 && "Basic Info"}
                {step === 2 && "Project Details"}
                {step === 3 && "Photos & Notes"}
              </span>
            </div>
            {step < totalSteps && (
              <div
                className={cn(
                  "w-12 h-px transition-colors",
                  isCompleted ? "bg-success" : "bg-text-muted/20"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ============================================
// Step 1: Basic Info
// ============================================

function Step1BasicInfo({
  formData,
  updateField,
  errors,
}: {
  formData: FormData;
  updateField: (field: string, value: string) => void;
  errors: FormErrors;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={pageSpring}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              placeholder="John Smith"
              className={cn(
                "w-full pl-10 pr-4 py-3 bg-surface border rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30",
                errors.fullName ? "border-error" : "border-text-muted/20"
              )}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 font-body text-xs text-error flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) => updateField("email", e.target.value)}
              placeholder="john@example.com"
              className={cn(
                "w-full pl-10 pr-4 py-3 bg-surface border rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30",
                errors.email ? "border-error" : "border-text-muted/20"
              )}
            />
          </div>
          {errors.email && (
            <p className="mt-1 font-body text-xs text-error flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="(555) 123-4567"
              className="w-full pl-10 pr-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Street Address *
          </label>
          <div className="relative">
            <Home className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
            <input
              type="text"
              value={formData.address}
              onChange={(e) => updateField("address", e.target.value)}
              placeholder="123 Main Street"
              className={cn(
                "w-full pl-10 pr-4 py-3 bg-surface border rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30",
                errors.address ? "border-error" : "border-text-muted/20"
              )}
            />
          </div>
          {errors.address && (
            <p className="mt-1 font-body text-xs text-error flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.address}
            </p>
          )}
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            City *
          </label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            placeholder="Austin"
            className={cn(
              "w-full px-4 py-3 bg-surface border rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30",
              errors.city ? "border-error" : "border-text-muted/20"
            )}
          />
          {errors.city && (
            <p className="mt-1 font-body text-xs text-error flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.city}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-body text-sm font-medium text-text-primary mb-2">
              State *
            </label>
            <input
              type="text"
              value={formData.state}
              onChange={(e) => updateField("state", e.target.value)}
              placeholder="TX"
              maxLength={2}
              className={cn(
                "w-full px-4 py-3 bg-surface border rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 uppercase",
                errors.state ? "border-error" : "border-text-muted/20"
              )}
            />
            {errors.state && (
              <p className="mt-1 font-body text-xs text-error flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.state}
              </p>
            )}
          </div>
          <div>
            <label className="block font-body text-sm font-medium text-text-primary mb-2">
              ZIP Code *
            </label>
            <input
              type="text"
              value={formData.zipCode}
              onChange={(e) => updateField("zipCode", e.target.value)}
              placeholder="78701"
              maxLength={10}
              className={cn(
                "w-full px-4 py-3 bg-surface border rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30",
                errors.zipCode ? "border-error" : "border-text-muted/20"
              )}
            />
            {errors.zipCode && (
              <p className="mt-1 font-body text-xs text-error flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                {errors.zipCode}
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// Step 2: Project Details
// ============================================

function Step2ProjectDetails({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: (field: string, value: string) => void;
}) {
  const chargerTypes = [
    { value: "level2-32a", label: "Level 2 — 32A (standard)" },
    { value: "level2-40a", label: "Level 2 — 40A (faster charging)" },
    { value: "level2-48a", label: "Level 2 — 48A (high-speed)" },
    { value: "level2-16a", label: "Level 2 — 16A (portable/budget)" },
    { value: "nema-1450", label: "NEMA 14-50 Outlet (portable charger)" },
    { value: "not-sure", label: "Not sure — help me choose" },
  ];

  const parkingLocations = [
    { value: "attached-garage", label: "Attached Garage" },
    { value: "detached-garage", label: "Detached Garage" },
    { value: "carport", label: "Carport" },
    { value: "driveway", label: "Driveway" },
    { value: "other", label: "Other" },
  ];

  const panelCapacities = [
    { value: "100a", label: "100A" },
    { value: "150a", label: "150A" },
    { value: "200a", label: "200A" },
    { value: "400a", label: "400A+" },
    { value: "not-sure", label: "Not sure" },
  ];

  const timelines = [
    { value: "asap", label: "As soon as possible" },
    { value: "1-2-weeks", label: "Within 1–2 weeks" },
    { value: "1-month", label: "Within 1 month" },
    { value: "2-3-months", label: "2–3 months" },
    { value: "flexible", label: "Flexible / just exploring" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={pageSpring}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Charger Type *
          </label>
          <select
            value={formData.chargerType}
            onChange={(e) => updateField("chargerType", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
          >
            <option value="">Select charger type</option>
            {chargerTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Charger Brand (if known)
          </label>
          <input
            type="text"
            value={formData.chargerBrand}
            onChange={(e) => updateField("chargerBrand", e.target.value)}
            placeholder="e.g., ChargePoint, Tesla, JuiceBox"
            className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Parking Location *
          </label>
          <select
            value={formData.parkingLocation}
            onChange={(e) => updateField("parkingLocation", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
          >
            <option value="">Select location</option>
            {parkingLocations.map((loc) => (
              <option key={loc.value} value={loc.value}>
                {loc.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Electrical Panel Capacity
          </label>
          <select
            value={formData.panelCapacity}
            onChange={(e) => updateField("panelCapacity", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
          >
            <option value="">Select capacity</option>
            {panelCapacities.map((cap) => (
              <option key={cap.value} value={cap.value}>
                {cap.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Spare Breaker Slots
          </label>
          <select
            value={formData.spareBreakers}
            onChange={(e) => updateField("spareBreakers", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
          >
            <option value="">Select</option>
            <option value="0">None — panel is full</option>
            <option value="1-2">1–2 slots</option>
            <option value="3-4">3–4 slots</option>
            <option value="5+">5+ slots</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Estimated Wire Run Distance
          </label>
          <select
            value={formData.wireRunEstimate}
            onChange={(e) => updateField("wireRunEstimate", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
          >
            <option value="">Select distance</option>
            <option value="under-20">Under 20 feet</option>
            <option value="20-40">20–40 feet</option>
            <option value="40-60">40–60 feet</option>
            <option value="60-100">60–100 feet</option>
            <option value="100+">Over 100 feet</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Do you think you need a panel upgrade?
          </label>
          <select
            value={formData.needsPanelUpgrade}
            onChange={(e) => updateField("needsPanelUpgrade", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
          >
            <option value="">Select</option>
            <option value="yes">Yes, I know I need one</option>
            <option value="no">No, my panel should handle it</option>
            <option value="not-sure">Not sure — need assessment</option>
          </select>
        </div>

        <div>
          <label className="block font-body text-sm font-medium text-text-primary mb-2">
            Preferred Timeline
          </label>
          <select
            value={formData.preferredTimeline}
            onChange={(e) => updateField("preferredTimeline", e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
          >
            <option value="">Select timeline</option>
            {timelines.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block font-body text-sm font-medium text-text-primary mb-2">
          Additional Notes
        </label>
        <textarea
          value={formData.notes}
          onChange={(e) => updateField("notes", e.target.value)}
          placeholder="Any details that might help electricians quote accurately: access issues, preferred mounting location, existing conduit, etc."
          rows={4}
          className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
        />
      </div>
    </motion.div>
  );
}

// ============================================
// Step 3: Photos & Notes
// ============================================

function Step3PhotosNotes({
  formData,
  updateField,
}: {
  formData: FormData;
  updateField: (field: string, value: string) => void;
}) {
  const [uploadedFiles, setUploadedFiles] = React.useState<string[]>([]);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    // Simulate file upload — in production this would upload to a server
    const mockFiles = ["panel-photo-1.jpg", "panel-photo-2.jpg", "garage-photo.jpg"];
    const newFile = mockFiles[uploadedFiles.length % mockFiles.length];
    setUploadedFiles((prev) => [...prev, newFile]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={pageSpring}
      className="space-y-8"
    >
      {/* Photo Upload */}
      <div>
        <h3 className="font-heading text-lg font-medium text-text-primary mb-2">
          Upload Photos (Recommended)
        </h3>
        <p className="font-body text-sm text-text-secondary mb-4">
          Photos of your electrical panel and parking location help electricians
          give accurate quotes without a site visit.
        </p>

        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-text-muted/20 rounded-xl p-8 text-center cursor-pointer hover:border-primary/30 hover:bg-background-alt/50 transition-colors"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileSelect}
          />
          <Upload className="w-8 h-8 text-text-muted mx-auto mb-3" />
          <p className="font-body text-sm text-text-primary font-medium">
            Click to upload photos
          </p>
          <p className="font-body text-xs text-text-muted mt-1">
            Panel photo, parking location, panel label — up to 10 images
          </p>
        </div>

        {/* Uploaded files list */}
        {uploadedFiles.length > 0 && (
          <motion.div
            className="mt-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={layoutSpring}
          >
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-background-alt rounded-lg px-4 py-2"
              >
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm text-text-primary">{file}</span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="font-body text-xs text-text-muted hover:text-error transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Photo tips */}
      <div className="bg-background-alt/50 rounded-xl p-6">
        <h4 className="font-heading text-sm font-medium text-text-primary mb-3">
          What to photograph:
        </h4>
        <ul className="space-y-2">
          {[
            "Your electrical panel (full view, door open)",
            "Panel label showing amperage and breaker list",
            "Where you park (garage, driveway, carport)",
            "Path from panel to parking location",
            "Any obstacles or special conditions",
          ].map((tip) => (
            <li key={tip} className="flex items-start gap-2 font-body text-sm text-text-secondary">
              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Additional notes */}
      <div>
        <label className="block font-body text-sm font-medium text-text-primary mb-2">
          Anything else we should know?
        </label>
        <textarea
          value={formData.additionalNotes}
          onChange={(e) => updateField("additionalNotes", e.target.value)}
          placeholder="Special requests, access instructions, HOA requirements, etc."
          rows={4}
          className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
        />
      </div>

      {/* How did you hear */}
      <div>
        <label className="block font-body text-sm font-medium text-text-primary mb-2">
          How did you hear about AmpReady?
        </label>
        <select
          value={formData.howDidYouHear}
          onChange={(e) => updateField("howDidYouHear", e.target.value)}
          className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg font-body text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none"
        >
          <option value="">Select</option>
          <option value="search">Google / Search engine</option>
          <option value="social">Social media</option>
          <option value="friend">Friend or family</option>
          <option value="electrician">Electrician referral</option>
          <option value="ev-dealer">EV dealership</option>
          <option value="other">Other</option>
        </select>
      </div>
    </motion.div>
  );
}

// ============================================
// Success State
// ============================================

function SuccessState() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={pageSpring}
      className="text-center py-16"
    >
      <motion.div
        className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ...bounceSpring, delay: 0.2 }}
      >
        <Check className="w-10 h-10 text-success" />
      </motion.div>

      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
        Job Packet Submitted!
      </h2>
      <p className="font-body text-lg text-text-secondary max-w-lg mx-auto mb-8">
        We have received your information and are building your job packet.
        Licensed electricians in your area will review it and send quotes
        within 24–48 hours.
      </p>

      <div className="bg-background-alt rounded-xl p-6 max-w-md mx-auto mb-8">
        <h3 className="font-heading text-sm font-medium text-text-primary mb-4">
          What happens next:
        </h3>
        <ul className="space-y-3 text-left">
          {[
            { icon: Clock, text: "We review your details (within 4 hours)" },
            { icon: Shield, text: "Verified electricians see your packet" },
            { icon: Zap, text: "You receive quotes within 24–48 hours" },
            { icon: CheckCircle2, text: "Compare and choose your electrician" },
          ].map((item, index) => (
            <motion.li
              key={item.text}
              className="flex items-center gap-3 font-body text-sm text-text-secondary"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...microSpring, delay: 0.3 + index * 0.1 }}
            >
              <item.icon className="w-5 h-5 text-primary shrink-0" />
              {item.text}
            </motion.li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => router.push("/")}
        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-lg hover:shadow-glow transition-shadow"
      >
        Back to Home
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

// ============================================
// Trust Elements
// ============================================

function TrustElements() {
  const items = [
    { icon: Shield, label: "Licensed electricians only" },
    { icon: Clock, label: "Quotes within 24–48 hours" },
    { icon: CheckCircle2, label: "No cost to homeowners" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-text-muted">
          <item.icon className="w-4 h-4 text-accent" />
          <span className="font-body text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

// ============================================
// Main Page Component
// ============================================

export default function GetStartedPage() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [errors, setErrors] = React.useState<FormErrors>({});

  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    chargerType: "",
    chargerBrand: "",
    parkingLocation: "",
    panelCapacity: "",
    spareBreakers: "",
    wireRunEstimate: "",
    needsPanelUpgrade: "",
    preferredTimeline: "",
    notes: "",
    panelPhotos: [],
    parkingPhotos: [],
    additionalNotes: "",
    howDidYouHear: "",
  });

  const updateField = React.useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when field is updated
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const validateStep = (stepNum: number): boolean => {
    const newErrors: FormErrors = {};

    if (stepNum === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (!formData.address.trim()) newErrors.address = "Address is required";
      if (!formData.city.trim()) newErrors.city = "City is required";
      if (!formData.state.trim()) newErrors.state = "State is required";
      if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-container-lg mx-auto w-full">
          <SuccessState />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-background-alt/40" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/3 pointer-events-none"
          style={{ borderRadius: "55% 45% 40% 60% / 50% 55% 45% 50%" }}
        />

        <div className="relative z-10 max-w-container-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={pageSpring}
          >
            <span className="inline-block font-mono text-sm text-primary tracking-wide uppercase mb-4">
              Get Started
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
              Build Your{" "}
              <span className="text-primary">Job Packet</span>
            </h1>
            <p className="mt-4 font-body text-lg text-text-secondary max-w-xl mx-auto">
              Answer a few questions, upload photos, and get matched with
              licensed electricians who can quote your project accurately.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-container-lg mx-auto">
          <StepIndicator currentStep={step} totalSteps={3} />

          <div className="bg-surface rounded-2xl shadow-lg border border-text-muted/10 p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <Step1BasicInfo
                  key="step1"
                  formData={formData}
                  updateField={updateField}
                  errors={errors}
                />
              )}
              {step === 2 && (
                <Step2ProjectDetails
                  key="step2"
                  formData={formData}
                  updateField={updateField}
                />
              )}
              {step === 3 && (
                <Step3PhotosNotes
                  key="step3"
                  formData={formData}
                  updateField={updateField}
                />
              )}
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-text-muted/10">
              <button
                onClick={handleBack}
                disabled={step === 1}
                className={cn(
                  "inline-flex items-center gap-2 px-6 py-3 font-body font-medium rounded-lg transition-colors",
                  step === 1
                    ? "text-text-muted cursor-not-allowed"
                    : "text-text-primary hover:bg-background-alt"
                )}
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              {step < 3 ? (
                <motion.button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-md hover:shadow-glow transition-shadow"
                  {...buttonHover}
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={cn(
                    "inline-flex items-center gap-2 px-8 py-3 bg-primary text-text-inverse font-body font-medium rounded-lg shadow-md transition-all",
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-glow"
                  )}
                  {...buttonHover}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-text-inverse/30 border-t-text-inverse rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      Submit Job Packet
                    </>
                  )}
                </motion.button>
              )}
            </div>
          </div>

          <TrustElements />
        </div>
      </section>
    </div>
  );
}
